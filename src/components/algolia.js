import React, { Fragment } from "react"
import { Link } from "gatsby"
import { connectHits, connectHighlight } from "react-instantsearch-dom"
import styled from "styled-components"

const HitList = styled.section`
  display: grid;
  grid-gap: 1rem;

  a {
    position: relative;
  }
`

const PostPreview = styled.article`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 275px;
  transition: 0.3s linear;

  &:hover {
    box-shadow: 4px 4px 30px ${props => props.theme.primary};
    transition: 0.3s linear;
  }
`

const PostTitle = styled.h1`
  text-align: right;
  z-index: 2;
`

const PostDate = styled.p`
  font-size: 9rem;
  color: ${props => props.theme.highlightcolor};
  font-weight: 900;
  height: 100%;
  text-align: right;
  z-index: 2;
`

const PostExcerpt = styled.p`
  text-align: right;
  padding: 20px 7px 20px 20px;
  z-index: 2;
`

const PostSubtitle = styled.h4`
  text-align: right;
  padding-top: 15px;
  padding-right: 10px;
`

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
