import React, { useState, useMemo } from "react"
import { Link } from "gatsby"
import { useScrollPosition } from "./useScrollPosition"
import { NavigationHeader } from "../styles"

const Header = ({ target }) => {
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
      <>
        <NavigationHeader show={hideOnScroll}>
          <Link to="/">home</Link>
        </NavigationHeader>
      </>
    ),
    [hideOnScroll]
  )
}

export default Header
