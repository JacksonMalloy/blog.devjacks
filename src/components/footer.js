import React, { useState, useMemo } from "react"
import { useScrollPosition } from "../components/useScrollPosition"
import { NavigationFooter } from "../styles"
import { connectSearchBox } from "react-instantsearch-dom"

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <input
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
    <button onClick={() => refine("")}>Search</button>
    {isSearchStalled ? "My search is stalled" : ""}
  </form>
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
    100
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
