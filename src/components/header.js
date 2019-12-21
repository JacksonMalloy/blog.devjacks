import React, { useState, useMemo } from "react"
import { Link } from "gatsby"
import { useScrollPosition } from "../components/useScrollPosition"
import { NavigationHeader } from "../styles"

const Header = () => {
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
      <NavigationHeader show={hideOnScroll}>
        <div>
          <Link to="/">Hello from header</Link>
        </div>
      </NavigationHeader>
    ),
    [hideOnScroll]
  )
}

export default Header
