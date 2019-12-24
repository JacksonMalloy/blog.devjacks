import React from "react"
import { MyThemeProvider } from "../themeContext"
import { GlobalStyles } from "../globalStyles"

const BlogLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <MyThemeProvider>{children}</MyThemeProvider>
    </>
  )
}

export default BlogLayout
