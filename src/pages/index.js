import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout"
import Footer from "../components/footer"
import SoundCloudTracks from "../components/soundCloudTracks"
import Twitter from "../components/twitter"
import Timeline from "../components/timeline"
import Contact from "../components/contact"

import { MainBody, MainBody2, MainBody3 } from "../styles"
import { CustomHits } from "../components/algolia"

const StyledContent = styled.div`
  padding: 6rem 0 10rem 2rem;
  display: grid;
  z-index: 8;
  max-width: 450px;
  grid-area: a;

  @media (max-width: 800px) {
    padding: 6rem 0 10rem 0rem;
  }
`

const StyledHidden = styled.div`
  display: grid;
  z-index: 1;
  min-width: 450px;
  grid-area: e;
`

const StyledContact = styled.form`
  display: grid;
  grid-area: g;
  width: 100%;
  height: 100%;
  justify-self: right;
  justify-items: center;
  align-items: center;

  /* Fix Later */

  @media (max-width: 1305px) {
    display: none;
  }
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

  /* Fix Later */

  @media (max-width: 1305px) {
    display: none;
  }
`

const StyledGallery = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-area: f;
  padding: 5rem 0;
  grid-gap: 2rem;
  margin-left: 5rem;

  @media (max-width: 1075px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 800px) {
    display: none;
  }

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

  @media (max-width: 1305px) {
    padding-right: 3rem;
  }

  @media (max-width: 1075px) {
    display: none;
  }
`

const StyledFixedMainColumn = styled.div`
  grid-column: 9 / 11;
  height: 100vh;
  width: 100%;
  z-index: 3;
  position: relative;
  align-items: center;
  justify-items: center;
  display: grid;

  h2 {
    transform: rotate(-90deg);
    margin: 0;
    font-size: 7rem;
  }

  @media (max-width: 1305px) {
    padding-right: 3rem;
  }

  @media (max-width: 1075px) {
    display: none;
  }
`

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
          <StyledTrackList>{/* <SoundCloudTracks /> */}</StyledTrackList>
        </StyledGallery>
        <StyledTweets>
          <Twitter />
        </StyledTweets>
        <StyledContact>
          <Img fluid={data.imageSharp.fluid} />
          <Contact />
        </StyledContact>
      </MainBody2>
      <MainBody3>
        <StyledFixedMainColumn>
          <h2>Work in Progress</h2>
        </StyledFixedMainColumn>
      </MainBody3>
    </Layout>
  )
}

export default IndexPage
