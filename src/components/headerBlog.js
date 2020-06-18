import React, { useState, useMemo } from 'react'
import { Link } from 'gatsby'
import { useScrollPosition } from './useScrollPosition'
import { BlogNavigationHeader } from '../styles'
import ReadingProgress from '../components/readingProgress'

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
            <div className="navigation">
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

export default HeaderBlog
