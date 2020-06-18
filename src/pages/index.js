import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layout'
import { Blog } from '../components/views/blog'
import { About } from '../components/views/about'
import { Contact } from '../components/views/contact'
import { Social } from '../components/views/social'
import { MobileTabs } from '../components/mobileTabs'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      imageSharp {
        id
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  `)

  const [contactSocial, setContactSocial] = useState(false)
  const [socialView, setSocialView] = useState(true)
  const [timeline, setTimeline] = useState(true)

  return (
    <Layout
      setContactSocial={setContactSocial}
      contactSocial={contactSocial}
      socialView={socialView}
      setSocialView={setSocialView}
      timeline={timeline}
      setTimeline={setTimeline}
    >
      {contactSocial ? (
        <Contact />
      ) : (
        <>
          <About />
          <Social />
          <Blog />
          <MobileTabs view />
        </>
      )}
    </Layout>
  )
}

export default IndexPage
