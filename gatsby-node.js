const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/index.tsx');

  const res = await graphql(`
   query {
       allMdx { 
          edges {
            node { 
              slug
            }
          }
       }   
      }
   `)

    res.data.allMdx.edges.forEach((edge)=> {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.slug}`,
        context: {
          slug: edge.node.slug
        }

      })
    })
  }

  const { createFilePath } = require(`gatsby-source-filesystem`)

  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === "Mdx") {
      const value = createFilePath({ node, getNode })

      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }

