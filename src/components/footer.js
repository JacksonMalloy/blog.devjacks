import React, { useState } from "react"
import styled from "styled-components"

import { SearchInput, SearchForm, SearchSubmit } from "../styles/search"
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
  padding: 2rem;
`

const SearchBox = ({ currentRefinement, refine }) => (
  <SearchForm noValidate action="" role="search">
    <SearchInput className="input-effect">
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
    </SearchInput>

    <SearchSubmit onClick={() => refine("")}>Refesh</SearchSubmit>
  </SearchForm>
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
