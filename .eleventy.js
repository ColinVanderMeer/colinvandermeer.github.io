import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/static": "/public" });
    eleventyConfig.addPassthroughCopy({ "src/css": "/css/" }); // Extra fix so vite can optimize css
    
    eleventyConfig.addLayoutAlias("article", "layouts/article")

    eleventyConfig.addPlugin(EleventyVitePlugin);
}

export const config = {
	dir: {
		input: "src",
	},
};