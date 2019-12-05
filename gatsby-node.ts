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
    const html = post.body.childMarkdownRemark.html
    const contentHeadings = html.match(/<h2>.*<\/h2>/g)
    const contentSections = contentHeadings.map((heading: string, index: number, headings: string[]) => {
      const nextHeading = headings[index + 1]
      const nextHeadingStart = nextHeading ? html.indexOf(headings[index + 1]) : -1
      const headingStart = html.indexOf(heading)
      return html.slice(headingStart, nextHeadingStart)
    })

    contentSections.forEach((section: string, index: number) => {
      createPage({
        path: index === 0 ? `/${post.slug}/` : `/${post.slug}/${index + 1}/`,
        component: require.resolve(`./src/templates/post.tsx`),
        context: { post, content: section, page: index },
      })
    })
  })
}
