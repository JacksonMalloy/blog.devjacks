import React, { useState, useMemo } from "react"
import { useScrollPosition } from "../components/useScrollPosition"
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

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    null,
    false,
    0
  )

  return useMemo(
    () => (
      <NavigationFooter show={hideOnScroll}>
        <CustomSearchBox />
      </NavigationFooter>
    ),
    [hideOnScroll]
  )
}

export default Footer
