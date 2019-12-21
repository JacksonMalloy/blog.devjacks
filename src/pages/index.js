import React from "react"
import { Hits } from "react-instantsearch-dom"
import Layout from "../layout"
import PostPreview from "../components/postPreview"
import { Container, MainBody } from "../styles"

const IndexPage = () => (
  <Layout>
    <MainBody>
      <Container>
        <Hits hitComponent={PostPreview} />
      </Container>
    </MainBody>
  </Layout>
)

export default IndexPage
