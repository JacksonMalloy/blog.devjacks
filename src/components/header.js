import React, { useState, useMemo } from "react"
import { withTheme } from "styled-components"

import { useScrollPosition } from "./useScrollPosition"
import { NavigationHeader } from "../styles"
import { useTheme } from "../themeContext"
import BrandLogo from "../svg/brandLogo"

const Header = ({ target }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  const themeToggle = useTheme()

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
          <div onClick={() => themeToggle.toggle()}>
            <BrandLogo />
          </div>
        </NavigationHeader>
      </>
    ),
    [hideOnScroll, themeToggle]
  )
}

export default withTheme(Header)
