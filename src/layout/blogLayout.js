import React from "react"
import { MyThemeProvider } from "../themeContext"
import { GlobalStyles } from "../globalStyles"
import Header from "../components/header"

const BlogLayout = ({ children }) => {
  return (
    <>
      <MyThemeProvider>
        <GlobalStyles />
        {children}
      </MyThemeProvider>
    </>
  )
}

export default BlogLayout
