// from claudia-rndrs

/* Creating a collection containing all blogposts by filtering based on folder and filetype */
export const getAllPosts = (collectionApi) => {
    return collectionApi.getFilteredByGlob('./src/blog/*.md')
  }