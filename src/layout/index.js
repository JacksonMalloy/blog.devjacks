import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { GlobalStyles } from "../globalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
