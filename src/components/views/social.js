import React from 'react'
import styled from 'styled-components'
import Twitter from '../twitter'

const StyledSocialContainer = styled.main`
  height: 100vh;
  border-right: none;
  border-left: none;
  display: grid;
  position: fixed;
  left: 40%;
  grid-template-columns: 1fr 320px 320px 480px;
  grid-auto-flow: row dense;
  width: 33%;
  top: 0;
  z-index: 8;
  overflow-y: hidden;

  @media (max-width: 1368px) {
    display: ${({ view }) => (view ? 'block' : 'none')};
  }

  @media (max-width: 1120px) {
    width: 100%;
    left: 0;
    height: auto;
    position: relative;
  }
`

const StyledContactTweetContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  grid-column: 2 / 3;
  display: grid;
  justify-self: center;
  width: 100%;
  grid-gap: 1rem;
  padding-left: 1.4rem;

  @media (max-width: 1120px) {
    grid-column: 1 / 4;
    padding-left: 0;
    max-width: 320px;
    margin: 0 auto;
  }
`

export const Social = ({ view }) => {
  return (
    <StyledSocialContainer view={view}>
      <StyledContactTweetContainer>
        <Twitter />
      </StyledContactTweetContainer>
    </StyledSocialContainer>
  )
}
