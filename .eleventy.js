import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyVitePlugin);
    
    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
}