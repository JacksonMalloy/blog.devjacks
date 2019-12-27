import React, { useState, useMemo } from "react"
import { Link } from "gatsby"
import { useScrollPosition } from "./useScrollPosition"
import { BlogNavigationHeader } from "../styles"
import ReadingProgress from "../components/readingProgress"

const HeaderBlog = ({ target }) => {
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
        <BlogNavigationHeader show={hideOnScroll} className="headerBlog">
          <div>
            <Link to="/">home</Link>
            <ReadingProgress target={target} />
          </div>
        </BlogNavigationHeader>
      </>
    ),
    [hideOnScroll, target]
  )
}

export default HeaderBlog
