import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

import {
  getAllPosts,
} from "./config/collections.js"

import {
  short_months
} from "./config/utils.js"

export default function (eleventyConfig) {
    eleventyConfig.addFilter("date_to_datetime", async (obj) => { // Thank you maia crimew for this code
        if (!obj) {
          return "";
        }
        let date = parseDate(obj);
        return short_months(date.getMonth()) + " " + (date.getDate() + 1).toString() + " " + date.getFullYear().toString(); 
        // This is bad... But doing it the proper way causes all sorts of issues
    });

    const parseDate = (str) => {
        if (str instanceof Date) {
          return str;
        }
        return Date.parse(str);
    };

    eleventyConfig.addCollection("blog", getAllPosts);

    eleventyConfig.addPassthroughCopy({ "src/static": "/public" });
    eleventyConfig.addPassthroughCopy({ "src/css": "/css/" }); // Extra fix so vite can optimize css
    
    eleventyConfig.addLayoutAlias("page", "layouts/page");
    eleventyConfig.addLayoutAlias("article", "layouts/article");

    eleventyConfig.addPlugin(EleventyVitePlugin);
}

export const config = {
	dir: {
		input: "src",
        output: "_site",
        includes: "_includes",
        data: "_data",
	},
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dataTemplateEngine: "njk",
  passthroughFileCopy: false,
};