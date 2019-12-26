import React, { Fragment } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { connectHits, connectHighlight } from "react-instantsearch-dom"
import Layout from "../layout"
import { Container, MainBody } from "../styles"
import { HitList, PostPreview } from "../styles/post"

// ------------- Custom Highlights -------------- //
const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: "_highlightResult",
    attribute,
    hit,
  })

  return (
    <>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark key={index} className="titleHighlight">
            {part.value}
          </mark>
        ) : (
          <Fragment key={index}>{part.value}</Fragment>
        )
      )}
    </>
  )
}

const CustomHighlight = connectHighlight(Highlight)
// ------------- Custom Highlights -------------- //

// ------------- Custom Snippets -------------- //

const Snippet = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: "_snippetResult",
    attribute,
    hit,
  })

  return (
    <>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark key={index}>{part.value}</mark>
        ) : (
          <Fragment key={index}>{part.value}</Fragment>
        )
      )}
    </>
  )
}

const CustomSnippet = connectHighlight(Snippet)
// ------------- Custom Snippets -------------- //

// ------------- Custom Hits -------------- //
const Hits = ({ hits }) => (
  <HitList>
    {hits.map(hit => (
      <Link to={hit.fields.slug} key={hit.objectID}>
        <PostPreview>
          <h1>
            <CustomHighlight hit={hit} attribute="title" />
          </h1>
          <p>{new Date(hit.date).toLocaleDateString()}</p>
          {hit.featuredImage === null ? (
            <></>
          ) : (
            <Img
              fluid={hit.featuredImage.childImageSharp.fluid}
              alt={hit.objectID}
            />
          )}

          <p>
            <CustomSnippet hit={hit} attribute="excerpt" />
          </p>
        </PostPreview>
      </Link>
    ))}
  </HitList>
)

const CustomHits = connectHits(Hits)
// ------------- Custom Hits -------------- //

const IndexPage = () => (
  <Layout>
    <MainBody>
      <Container>
        <CustomHits />
      </Container>
    </MainBody>
  </Layout>
)

export default IndexPage
