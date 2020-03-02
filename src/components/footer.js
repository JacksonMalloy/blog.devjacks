import React, { useState } from "react"
import styled from "styled-components"
import {
  StyledSearchInput,
  StyledSearchForm,
  StyledSearchSubmit,
} from "../styles/search"
import { connectSearchBox } from "react-instantsearch-dom"

const StyledNavigationFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.1s ease-in;
  transform: ${props => (props.show ? "none" : "translateY(100%)")};
  z-index: 2;
  backdrop-filter: blur(30px);
  opacity: 0.9;
  max-width: 450px;
  padding: 2rem 2rem 2rem 0.5rem;

  @media (max-width: 800px) {
    padding: 0 0 1rem 0;
    margin: auto;
    width: 100%;
    left: 0;
    max-width: 10000px;
  }
`

const SearchBox = ({ currentRefinement, refine }) => (
  <StyledSearchForm noValidate action="" role="search">
    <StyledSearchInput className="input-effect">
      <input
        className="effect-19"
        type="search"
        value={currentRefinement}
        placeholder="Search"
        onChange={event => refine(event.currentTarget.value)}
      />

      <span className="focus-border">
        <i></i>
      </span>
    </StyledSearchInput>

    <StyledSearchSubmit onClick={() => refine("")}>Refesh</StyledSearchSubmit>
  </StyledSearchForm>
)

const CustomSearchBox = connectSearchBox(SearchBox)

const Footer = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  return (
    <StyledNavigationFooter show={hideOnScroll}>
      <CustomSearchBox />
    </StyledNavigationFooter>
  )
}

export default Footer
