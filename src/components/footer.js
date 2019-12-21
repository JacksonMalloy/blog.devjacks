import React, { useState, useMemo } from "react"
import { useScrollPosition } from "../components/useScrollPosition"
import { NavigationFooter } from "../styles"
import { SearchBox } from "react-instantsearch-dom"

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
        <SearchBox />
      </NavigationFooter>
    ),
    [hideOnScroll]
  )
}

export default Footer
