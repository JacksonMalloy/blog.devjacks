import React, { useState, useMemo } from "react"
import { Link } from "gatsby"
import { withTheme } from "styled-components"
import { useScrollPosition } from "./useScrollPosition"
import { BlogNavigationHeader } from "../styles"
import ReadingProgress from "../components/readingProgress"
import BrandLogo from "../svg/brandLogo"
import { useTheme } from "../themeContext"

const HeaderBlog = ({ target }) => {
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
        <BlogNavigationHeader show={hideOnScroll} className="headerBlog">
          <div>
            <div className="navigation">
              <div onClick={() => themeToggle.toggle()} className="brandLogo">
                <BrandLogo />
              </div>
              <div className="navItems">
                <a href="https://app.devjacks.com">Contact</a>
                <Link to="/">Back</Link>
              </div>
            </div>

            <ReadingProgress target={target} />
          </div>
        </BlogNavigationHeader>
      </>
    ),
    [hideOnScroll, target]
  )
}

export default withTheme(HeaderBlog)
