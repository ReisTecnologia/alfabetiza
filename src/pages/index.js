import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { SEO } from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO
        title="Home"
        keywords={[`alfabetização`, `palavras`, `aprender a ler`]}
      />
      <Link to="/letra/a">Letras</Link>
    </Container>
  </Layout>
)

export default IndexPage
