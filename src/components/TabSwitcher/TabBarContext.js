import { createContext } from 'react'

export const TabBarContext = createContext({
  // Reference activeTab
  activeTab: '',
  // Callback to set the activeTab
  setTab: () => {},
})
