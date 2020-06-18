import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { connectHits, connectHighlight } from 'react-instantsearch-dom'
import styled from 'styled-components'

const StyledHitList = styled.section`
  display: grid;
  grid-gap: 1rem;

  a {
    position: relative;
  }
`

const StyledPostPreview = styled.article`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 275px;
  box-shadow: 4px 4px 30px ${(props) => props.theme.primary};
`

const StyledPostTitle = styled.h1`
  text-align: right;
  z-index: 2;

  @media (max-width: 1120px) {
    font-size: 3.2rem;
  }
`

const StyledPostDate = styled.p`
  font-size: 9rem;
  color: ${(props) => props.theme.highlightcolor};
  font-weight: 900;
  height: 100%;
  text-align: right;
  z-index: 2;

  @media (max-width: 1120px) {
    font-size: 8.2rem;
  }
`

const StyledPostExcerpt = styled.p`
  text-align: right;
  padding: 20px 7px 20px 20px;
  z-index: 2;
`

const StyledPostSubtitle = styled.h4`
  text-align: right;
  padding-top: 15px;
  padding-right: 10px;
`

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
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
    highlightProperty: '_snippetResult',
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
  <StyledHitList>
    {hits.map((hit) => (
      <Link to={hit.slug} key={hit.objectID}>
        <StyledPostPreview>
          <StyledPostTitle>
            <CustomHighlight hit={hit} attribute="title" />
          </StyledPostTitle>

          <StyledPostDate>{Array.from(hit.date).splice(0, 4).concat()}</StyledPostDate>

          <StyledPostSubtitle>{hit.subtitle}</StyledPostSubtitle>

          <StyledPostExcerpt>
            <CustomSnippet hit={hit} attribute="content" />
          </StyledPostExcerpt>
        </StyledPostPreview>
      </Link>
    ))}
  </StyledHitList>
)

export const CustomHits = connectHits(Hits)
