import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

import {
  getAllPosts,
} from "./config/collections.js"

export default function (eleventyConfig) {
    eleventyConfig.addFilter("date_to_datetime", async (obj) => { // Thank you maia crimew for this code
        if (!obj) {
          return "";
        }
        let date = parseDate(obj);
        date.setHours(24); // This fixes the date being off by one for some reason (smth smth localtime?)
        return date.toDateString();
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