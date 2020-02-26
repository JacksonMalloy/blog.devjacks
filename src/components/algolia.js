import React, { Fragment } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { connectHits, connectHighlight } from "react-instantsearch-dom"
import Layout from "../layout"
import { MainBody } from "../styles"
import {
  HitList,
  PostPreview,
  Content,
  PostDate,
  PostTitle,
  PostExcerpt,
  PostKeywords,
  PostSubtitle,
} from "../styles/post"

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
          // Adds a highlight to the string
          <mark key={index} className="titleHighlight">
            {part.value}
          </mark>
        ) : (
          // Need fragment component to add key
          <Fragment key={index}>{part.value}</Fragment>
        )
      )}
    </>
  )
}

// HOC for custom highlights
const CustomHighlight = connectHighlight(Highlight)

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
          // Adds a highlight to the string
          <mark key={index}>{part.value}</mark>
        ) : (
          // Need fragment component to add key
          <Fragment key={index}>{part.value}</Fragment>
        )
      )}
    </>
  )
}

// HOC for custom snippets
const CustomSnippet = connectHighlight(Snippet)

const Hits = ({ hits }) => (
  <HitList>
    {hits.map(hit => (
      <Link to={hit.slug} key={hit.objectID}>
        <PostPreview>
          <PostTitle>
            <CustomHighlight hit={hit} attribute="title" />
          </PostTitle>

          <PostDate>
            {Array.from(hit.date)
              .splice(0, 4)
              .concat()}
          </PostDate>

          <PostSubtitle>{hit.subtitle}</PostSubtitle>

          <PostExcerpt>
            <CustomSnippet hit={hit} attribute="content" />
          </PostExcerpt>
        </PostPreview>
      </Link>
    ))}
  </HitList>
)

export const CustomHits = connectHits(Hits)
