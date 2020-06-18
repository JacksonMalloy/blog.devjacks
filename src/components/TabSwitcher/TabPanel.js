import { useContext } from 'react'

import { TabBarContext } from './TabBarContext'

// What gets shown when the activeTab is selected
export const TabPanel = ({ onActive, children }) => {
  const tabBarContext = useContext(TabBarContext)
  // Show activeTabs children when active
  return onActive === tabBarContext.activeTab ? children : null
}
