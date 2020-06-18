import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import { MyThemeProvider } from '../themeContext'
import { GlobalStyles } from '../globalStyles'
import Header from '../components/header'
import styled from 'styled-components'

const searchClient = algoliasearch('IZ2HFIF8IL', '0f12e4219e9f986d121b3da6a403de1a')

const StyledLayout = styled.main`
  @media (max-width: 1120px) {
    max-width: 100%;
    margin: 0 auto;
  }
`

const Layout = ({ children, setContactSocial, contactSocial, setSocialView, socialView, timeline, setTimeline }) => {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <InstantSearch searchClient={searchClient} indexName="Posts">
        <Header
          setContactSocial={setContactSocial}
          contactSocial={contactSocial}
          setSocialView={setSocialView}
          socialView={socialView}
          timeline={timeline}
          setTimeline={setTimeline}
        />
        <StyledLayout>{children}</StyledLayout>
      </InstantSearch>
    </MyThemeProvider>
  )
}

export default Layout
