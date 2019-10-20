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
            file {
              url
            }
          }
          updatedAt
          title
          tags
          slug
          author {
            name
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
