import React from "react"

import styled from "styled-components"

const StyledTimeline = styled.div`
  margin: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, minmax(400px, 1fr));

  @media (max-width: 1500px) {
    grid-template-columns: 1fr;
  }

  .container {
    grid-column: 1 / span 2;
  }

  .right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    place-items: center;

    @media (max-width: 1500px) {
      grid-template-columns: 1fr;
    }

    .content {
      grid-column: 2 / span 1;

      @media (max-width: 1500px) {
        grid-column: 1;
      }
    }
  }

  .left {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    place-items: center;

    @media (max-width: 1500px) {
      grid-template-columns: 1fr;
    }

    .content {
      grid-column: 1 / span 1;

      @media (max-width: 1500px) {
        grid-column: 1;
      }
    }
  }
`

const Timeline = () => {
  return (
    <StyledTimeline>
      <div className="container right">
        <div className="content">
          <h2>2020</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span style={{ width: "100%", height: "100%" }}>
          {/* <Image fluid={data.file.childImageSharp.fluid} /> */}
        </span>
      </div>
      <div className="container left">
        <div className="content">
          <h2>2019</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span>Img</span>
      </div>
      <div className="container right">
        <div className="content">
          <h2>2018</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span>Img</span>
      </div>
      <div className="container left">
        <div className="content">
          <h2>2017</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span>Img</span>
      </div>
      <div className="container right">
        <div className="content">
          <h2>2016</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span>Img</span>
      </div>
      <div className="container left">
        <div className="content">
          <h2>2015</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span>Img</span>
      </div>
      <div className="container right">
        <div className="content">
          <h2>2012</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span>Img</span>
      </div>
      <div className="container left">
        <div className="content">
          <h2>2011</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span>Img</span>
      </div>
      <div className="container right">
        <div className="content">
          <h2>2007</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <span>Img</span>
      </div>
    </StyledTimeline>
  )
}

export default Timeline
