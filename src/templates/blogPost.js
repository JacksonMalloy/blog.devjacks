import { graphql } from "gatsby"
import React from "react"
import BlogLayout from "../layout/blogLayout"
import { MainBody } from "../styles"
import { Content } from "../styles/post"
import HeaderBlog from "../components/headerBlog"

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  const target = React.createRef()

  return (
    <BlogLayout location={props.location} title={siteTitle}>
      <HeaderBlog target={target} />
      <MainBody ref={target}>
        <Content>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
      </MainBody>
    </BlogLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
