import React, { useState, useMemo, useCallback } from 'react'
import { withTheme } from 'styled-components'
import styled from 'styled-components'
import { useScrollPosition } from './useScrollPosition'
import { useTheme } from '../themeContext'
import BrandLogo from '../svg/brandLogo'

// HEADER - Main
const StyledNavigationHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundcolor};
  transition: 0.3s ease-out;
  transform: ${(props) => (props.show ? 'none' : 'translateY(-100%)')};
  z-index: 9;
  backdrop-filter: blur(30px);
  opacity: 0.9;

  @media (max-width: 1120px) {
    display: none;
  }

  .logo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }

  .contact {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding-left: 1rem;
  }

  .change {
    padding: 0 1rem;
  }

  .socials {
    display: none;

    @media (max-width: 1368px) {
      display: block;
    }
  }

  .about {
    display: none;

    @media (max-width: 1120px) {
      display: block;
    }
  }
`

const Header = ({ target, contactSocial, setContactSocial, socialView, setSocialView, timeline, setTimeline }) => {
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

  const handleClick = useCallback(() => {
    setContactSocial(!contactSocial)
  }, [contactSocial, setContactSocial])

  const handleSocialClick = useCallback(() => {
    setSocialView(!socialView)
  }, [socialView, setSocialView])

  const handleTimelineClick = useCallback(() => {
    setTimeline(!timeline)
  }, [timeline, setTimeline])

  return useMemo(
    () => (
      <StyledNavigationHeader show={hideOnScroll}>
        <div onClick={() => themeToggle.toggle()} className="logo">
          <BrandLogo />
        </div>
        <div className="change contact" onClick={handleClick}>
          Contact
        </div>

        <div className="change socials width-1374px">Socials</div>

        <div className="change about width-1122px">Timeline</div>
      </StyledNavigationHeader>
    ),
    [hideOnScroll, themeToggle, contactSocial, handleClick, socialView, handleSocialClick]
  )
}

export default withTheme(Header)
