import React from 'react'
import ContactForm from '../contactForm'
import styled from 'styled-components'

const StyledFixedContainer = styled.main`
  height: 100vh;
  border-right: none;
  border-left: none;
  position: relative;
  width: 700px;
  overflow-x: hidden;
  top: 0;
  z-index: 9;
  margin: 0 auto;

  @media (max-width: 1120px) {
    min-width: 300px;
    margin: 0 auto;
    left: 0;
    position: relative;
  }
`

const StyledContact = styled.div`
  padding-top: 5rem;
  display: grid;
  width: 100%;
  height: 100%;
  max-height: 520px;
  justify-self: center;
  justify-items: center;
  align-items: center;
`

export const Contact = ({ view }) => {
  return (
    <StyledFixedContainer view={view}>
      <StyledContact>
        <ContactForm />
      </StyledContact>
    </StyledFixedContainer>
  )
}
