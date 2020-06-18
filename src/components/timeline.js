import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledTimeline = styled.div`
  display: grid;
  flex-direction: column;
  padding-right: 3rem;
  grid-gap: 2rem;
  padding-top: 5rem;
  padding-bottom: 20rem;
  min-width: 520px;
  max-width: 727px;
  padding-left: 2rem;

  @media (max-width: 1120px) {
    min-width: 300px;
    margin: 0 auto;
  }

  .container {
    display: flex;
    padding: 1rem;
    box-shadow: 4px 4px 30px ${(props) => props.theme.primary};

    .image {
      min-width: 200px;
      max-width: 200px;
    }
  }
`

const Timeline = ({ timeline }) => {
  const timeLinePhotos = useStaticQuery(graphql`
    query largeImage {
      file(name: { eq: "gatsby-icon" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `)

  const {
    file: {
      childImageSharp: { fluid },
    },
  } = timeLinePhotos

  return (
    <>
      {timeline ? (
        <StyledTimeline timeline={timeline}>
          <div className="container right">
            <div className="content">
              <h2>April 2019</h2>
              <p>
                Started as a web developer at Six12Creative Marketing Solutions. Went from Division 1 to premier league
                soccer in Vancouver.
              </p>
            </div>

            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>January 2019</h2>
              <p>
                Completion of a BBA with a marketing & human resource management concentration at Capilano University.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>October 2018</h2>
              <p>Had a fantastic sideroom set at MIA during Halloween where we wore masks and danced all night.</p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>June 2017</h2>
              <p>
                Got to play Moonmelt on the Radio in Vancouver. Created a track that has over 200,000 plays with Brianna
                Rose.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>May 2017</h2>
              <p>Hosted our very first DJ show as Moonmelt at Fortune Sound Club on the main stage.</p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>2015</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                eam.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>2012</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                eam.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>2011</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                eam.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>2007</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                eam.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
        </StyledTimeline>
      ) : (
        <StyledTimeline>
          <div className="container right">
            <div className="content">
              <h2>April 2019</h2>
              <p>
                Started as a web developer at Six12Creative Marketing Solutions. Went from Division 1 to premier league
                soccer in Vancouver.
              </p>
            </div>

            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>January 2019</h2>
              <p>
                Completion of a BBA with a marketing & human resource management concentration at Capilano University.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>October 2018</h2>
              <p>Had a fantastic sideroom set at MIA during Halloween where we wore masks and danced all night.</p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>June 2017</h2>
              <p>
                Got to play Moonmelt on the Radio in Vancouver. Created a track that has over 200,000 plays with Brianna
                Rose.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>May 2017</h2>
              <p>Hosted our very first DJ show as Moonmelt at Fortune Sound Club on the main stage.</p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>2015</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                eam.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>2012</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                eam.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>2011</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                eam.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>2007</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                eam.
              </p>
            </div>
            <div className="image">
              <Img fluid={fluid} />
            </div>
          </div>
        </StyledTimeline>
      )}
    </>
  )
}

export default Timeline
