const postQuery = `{
  posts: allMarkdownRemark(
      filter: {
          fileAbsolutePath: { regex: "/posts/"}
      }
  ) {
      edges {
          node {
              objectId: id
              frontmatter {
                  title
                  date
                  featuredImage {
                	  childImageSharp {
                      fluid(maxWidth: 800) {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
                        __typename
                      }
                    }
                	} 
              }
              fields {
                slug
              }
              excerpt(pruneLength: 100)
          }
      }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries
