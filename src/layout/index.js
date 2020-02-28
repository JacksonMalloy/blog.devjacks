import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

import { MyThemeProvider } from "../themeContext"
import { GlobalStyles } from "../globalStyles"
import Header from "../components/header"

const searchClient = algoliasearch(
  "IZ2HFIF8IL",
  "0f12e4219e9f986d121b3da6a403de1a"
)

const Layout = ({ children }) => {
  return (
    <>
      <MyThemeProvider>
        <GlobalStyles />
        <InstantSearch searchClient={searchClient} indexName="Posts">
          <Header />
          {children}
        </InstantSearch>
      </MyThemeProvider>
    </>
  )
}

export default Layout
