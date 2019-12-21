import React, { useState, useMemo } from "react"
import { Link } from "gatsby"
import { useScrollPosition } from "../components/useScrollPosition"
import { NavigationFooter } from "../styles"

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
        <div>
          <Link to="/">Hello from Footer</Link>
        </div>
      </NavigationFooter>
    ),
    [hideOnScroll]
  )
}

export default Footer
