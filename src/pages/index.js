import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout"
import Footer from "../components/footer"
import SoundCloudTracks from "../components/soundCloudTracks"
import Twitter from "../components/twitter"
import Timeline from "../components/timeline"
import Contact from "../components/contact"

import { MainBody, MainBody2 } from "../styles"
import { CustomHits } from "../components/algolia"

const StyledContent = styled.div`
  padding: 6rem 0 10rem 2rem;
  display: grid;
  z-index: 2;
  max-width: 450px;
  grid-area: a;
`

const StyledHidden = styled.div`
  display: grid;
  z-index: 2;
  min-width: 450px;
  grid-area: e;
`

const StyledContact = styled.form`
  display: grid;
  grid-area: g;
  max-width: 250px;
  min-width: 250px;
  justify-self: right;
  justify-items: center;
  align-items: center;
`

const StyledTweets = styled.span`
  display: grid;
  grid-area: h;
  max-width: 250px;
  min-width: 250px;
  justify-self: right;
  justify-items: center;
  align-items: center;
  padding: 4rem 0;
  margin-right: 4rem;
  grid-row-gap: 1rem;
`

const StyledGallery = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-area: f;
  padding: 5rem 0;
  grid-gap: 2rem;
  margin-left: 5rem;

  article {
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 3rem;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.primary};
  }
`

const StyledTrackList = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-row-gap: 4rem;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <MainBody>
        <StyledContent>
          <CustomHits />
          <Footer />
        </StyledContent>
      </MainBody>
      <MainBody2>
        <StyledHidden>Hidden</StyledHidden>
        <StyledGallery>
          <Timeline />
          <StyledTrackList>
            <SoundCloudTracks />
          </StyledTrackList>
        </StyledGallery>
        <StyledTweets>
          <Twitter />
        </StyledTweets>
        <StyledContact>
          <Contact />
        </StyledContact>
      </MainBody2>
    </Layout>
  )
}

export default IndexPage
