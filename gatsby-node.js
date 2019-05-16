exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
      {
        allProjectsJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
  }