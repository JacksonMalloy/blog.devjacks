import React from 'react'
import { TabBar, Tab, TabPanel } from './TabSwitcher'
import styled from 'styled-components'
import { About } from './views/about'
import { Blog } from './views/blog'
import { Contact } from './views/contact'
import { Social } from './views/social'

const StyledTabContainer = styled.section`
  display: none;
  @media (max-width: 1120px) {
    display: block;
  }
`

const StyledTabBar = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100vw;
  top: 0;
  background-color: red;
  z-index: 99999;
`

const StyledTabPanel = styled.div`
  z-index: 99;
`

export const MobileTabs = ({ view }) => {
  return (
    <StyledTabContainer>
      <TabBar>
        {/* Tabs */}
        <StyledTabBar>
          <Tab tab="Social">Social</Tab>
          <Tab tab="Blog">Blog</Tab>
          <Tab tab="About">About</Tab>
          <Tab tab="Contact">Contact</Tab>
        </StyledTabBar>
        {/* Panels */}
        <StyledTabPanel>
          <TabPanel onActive="Blog">
            <Blog view={view} />
          </TabPanel>
          <TabPanel onActive="About">
            <About view={view} />
          </TabPanel>
          <TabPanel onActive="Contact">
            <Contact view={view} />
          </TabPanel>
          <TabPanel onActive="Social">
            <Social view={view} />
          </TabPanel>
        </StyledTabPanel>
      </TabBar>
    </StyledTabContainer>
  )
}
