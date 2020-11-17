import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'

const IndexPage = () => (
  <Layout>
    <Container>
      <Link to="/letra/a">Letras</Link>
    </Container>
  </Layout>
)

export default IndexPage
