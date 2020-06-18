import React, { useState } from 'react'

import { TabBarContext } from './TabBarContext'

const TabBarProvider = TabBarContext.Provider

export const TabBar = ({ children }) => {
  const [tab, setTab] = useState('Blog')
  return <TabBarProvider value={{ activeTab: tab, setTab }}>{children}</TabBarProvider>
}
