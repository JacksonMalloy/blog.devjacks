import React from 'react'
import styled from 'styled-components'
import { CustomHits } from '../algolia'
import Footer from '../footer'

const StyledBlogContainer = styled.section`
  height: 100vh;
  border-right: none;
  border-left: none;
  display: grid;
  grid-template-columns: 1fr 320px 320px 480px;
  grid-auto-flow: row dense;
  min-width: 320px;
  overflow-x: hidden;

  @media (max-width: 1120px) {
    display: flex;
    justify-content: center;
    min-width: 100%;
    display: ${({ view }) => (view ? 'block' : 'none')};
  }
`

const StyledContent = styled.div`
  padding: 5rem 0 10rem 0rem;
  display: grid;
  z-index: 8;
  max-width: 450px;
  grid-column: 4;

  @media (max-width: 1120px) {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }
`

export const Blog = ({ view }) => {
  return (
    <StyledBlogContainer view={view}>
      <StyledContent>
        <CustomHits />
        <Footer />
      </StyledContent>
    </StyledBlogContainer>
  )
}
