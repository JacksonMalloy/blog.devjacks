import React from 'react'
import { Container, MainBody } from '../styles'
import Layout from '../layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <MainBody>
      <Container>
        <h1>Hi people</h1>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... </p>
        <Link to="/">Go to home</Link>
      </Container>
    </MainBody>
  </Layout>
)

export default NotFoundPage
