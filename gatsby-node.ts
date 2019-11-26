exports.createPages = async ({ graphql, actions }: { graphql: any, actions: any }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          body {
            childMarkdownRemark {
              html
            }
          }
          heroImage {
            fluid(maxWidth: 1440) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
            file {
              url
            }
          }
          createdAt(formatString: "MMMM DD, YYYY")
          title
          tags
          slug
          author {
            name
          }
          description {
            description
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.nodes.forEach((post: any) => {
    createPage({
      path: `/${post.slug}/`,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { post },
    })
  })
}
