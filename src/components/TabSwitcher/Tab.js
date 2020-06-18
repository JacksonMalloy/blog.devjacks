import React, { useContext } from 'react'
import styled from 'styled-components'
import { TabBarContext } from './TabBarContext'

const StyledTab = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Tab = ({ tab, children }) => {
  const tabBarContext = useContext(TabBarContext)

  const handleClick = () => {
    tabBarContext.setTab(tab)
  }

  return <StyledTab onClick={handleClick}>{children}</StyledTab>
}
