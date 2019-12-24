import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

import { MyThemeProvider } from "../themeContext"
import { GlobalStyles } from "../globalStyles"
import Header from "../components/header"
import Footer from "../components/footer"

const searchClient = algoliasearch(
  "18G3P2N5MW",
  "35964dd5dcb42a25619fd527a56a1112"
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
