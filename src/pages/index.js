import React from "react"
import Layout from "../layout"
import { MainBody } from "../styles"
import { Content } from "../styles/post"
import { CustomHits } from "../components/algolia"

const IndexPage = () => (
  <Layout>
    <MainBody>
      <Content>
        <CustomHits />
      </Content>
    </MainBody>
  </Layout>
)

export default IndexPage
