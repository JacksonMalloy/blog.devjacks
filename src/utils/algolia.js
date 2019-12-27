const postQuery = `{
  posts: allMarkdownRemark(
      filter: {
          fileAbsolutePath: { regex: "/posts/"}
      }
  ) {
      edges {
          node {
              excerpt(pruneLength: 5000)
              objectId: id
              frontmatter {
                  title
                  date
                  slug
                  subtitle
                  keywords
              }
          }
      }
  }
}`

const unnestFrontmatter = node => {
  const { frontmatter, ...rest } = node

  return {
    ...frontmatter,
    ...rest,
  }
}

const handleExcerpt = node => {
  const { excerpt, ...rest } = node

  const sections = excerpt.split("\n\n")

  const records = sections.map(section => ({
    ...rest,
    content: section,
  }))

  return records
}

const settings = {
  attributesToSnippet: [`excerpt:20`],
  attributeForDistinct: "slug",
  distinct: true,
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) =>
      data.posts.edges
        .map(edge => edge.node)
        .map(unnestFrontmatter)
        .map(handleExcerpt)
        .reduce((acc, cur) => [...acc, ...cur], []),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries
