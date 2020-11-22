const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const productPage = path.resolve('./src/template/productTemplate.js')

    resolve(
      graphql(`
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    name
                    description
                    price
                    
                  }
                }
              }
            }
          }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const products = result.data.allMarkdownRemark.edges

        products.forEach(product => {
          createPage({
            path: product.node.fields.slug,
            component: productPage,
            context: {
              slug: product.node.fields.slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
    })

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
