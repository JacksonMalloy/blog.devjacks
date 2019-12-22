import React from "react"
import Layout from "../layout"
import { Container, MainBody } from "../styles"
import { Link } from "gatsby"

import { connectHits, connectHighlight } from "react-instantsearch-dom"

// ------------- Custom Highlights -------------- //
const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: "_highlightResult",
    attribute,
    hit,
  })

  return (
    <span>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark key={index}>{part.value}</mark>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </span>
  )
}

const CustomHighlight = connectHighlight(Highlight)
// ------------- Custom Highlights -------------- //

// ------------- Custom Hits -------------- //
const Hits = ({ hits }) => (
  <section>
    {hits.map(hit => (
      <Link to={hit.fields.slug} key={hit.objectID}>
        <h3>
          <CustomHighlight hit={hit} attribute="title" />
        </h3>
        <small>{new Date(hit.date).toLocaleDateString()}</small>

        <p>
          <CustomHighlight hit={hit} attribute="excerpt" />
        </p>
      </Link>
    ))}
  </section>
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
