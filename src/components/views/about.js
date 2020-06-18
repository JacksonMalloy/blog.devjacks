import React from 'react'
import styled from 'styled-components'
import Timeline from '../timeline'

const StyledAboutContainer = styled.main`
  height: 100vh;
  border-right: none;
  border-left: none;
  display: grid;
  position: fixed;
  grid-template-columns: 1fr 320px 320px 480px;
  grid-auto-flow: row dense;
  width: 100vw;
  overflow-x: hidden;
  z-index: 2;
  top: 0;
  z-index: 4;
  padding-bottom: 15rem;

  @media (max-width: 1120px) {
    display: ${({ view }) => (view ? 'block' : 'none')};
  }
`

export const About = ({ view }) => {
  return (
    <StyledAboutContainer view={view}>
      <Timeline />
    </StyledAboutContainer>
  )
}
