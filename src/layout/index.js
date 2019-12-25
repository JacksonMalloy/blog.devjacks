import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

import { MyThemeProvider } from "../themeContext"
import { GlobalStyles } from "../globalStyles"
import Header from "../components/header"
import Footer from "../components/footer"

const searchClient = algoliasearch(
  "18G3P2N5MW",
  "25f24d36bb2b6da179416f9e4ec013a9"
)

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <MyThemeProvider>
        <InstantSearch searchClient={searchClient} indexName="Posts">
          <Header />
          {children}
          <Footer />
        </InstantSearch>
      </MyThemeProvider>
    </>
  )
}

export default Layout
