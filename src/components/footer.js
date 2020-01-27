import React, { useState } from "react"
import { NavigationFooter } from "../styles"
import { SearchInput, SearchForm, SearchSubmit } from "../styles/search"
import { connectSearchBox } from "react-instantsearch-dom"

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
    <NavigationFooter show={hideOnScroll}>
      <CustomSearchBox />
    </NavigationFooter>
  )
}

export default Footer
