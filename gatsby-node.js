
const path = require("path")

exports.createPages = async ({graphql, actions})=> {
    const { createPage } = actions;
    const response = await graphql(`
      query {
        allStrapiBlog {
          edges {
            node {
              Slug
            }
          }
        }
      }
    `)
      console.log("response =",response);
    response.data.allStrapiBlog.edges.forEach(edge=> {
        createPage({
            path: `/${edge.node.Slug}`,
            component: path.resolve("./src/templates/blog-post.js"),
            context: {
                slug: edge.node.Slug
            }
        });
    })
}