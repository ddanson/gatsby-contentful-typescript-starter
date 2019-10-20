exports.createPages = async ({ graphql, actions }: { graphql: any, actions: any }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          heroImage {
            file {
              url
            }
          }
          description {
            description
          }
          body {
            body
          }
          author {
            name
          }
          slug
          title
          tags
          updatedAt
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
