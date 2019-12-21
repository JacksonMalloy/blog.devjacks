import React from "react"
import { Container, MainBody } from "../styles"
import Layout from "../layout"
import { Link } from "gatsby"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <MainBody>
      <Container>
        <h1>Hi people</h1>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... </p>
        <div>
          <Image />
        </div>
        <Link to="/">Go to home</Link>
      </Container>
    </MainBody>
  </Layout>
)

export default NotFoundPage
