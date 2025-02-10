export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
}