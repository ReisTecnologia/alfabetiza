import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Titulo } from '../components/Titulo'
import { Rodape } from '../components/Rodape'

import { Elements } from '../components/Elements'

export default function Letra({ data }) {
  const post = data.markdownRemark
  console.log('Letra -> post', post)
  return (
    <Layout>
      <Titulo>{post.frontmatter.letra}</Titulo>
      <Container>
        <Elements elements={post.frontmatter.elements} />
      </Container>
      <Rodape />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        letra
        elements {
          letter
          texto
          text
          type
          urlAudio
          urlVideo
          words {
            word
            urlWord
            startsWithTheLetter
            urlRightAnswerExplanation
            urlWrongAnswerExplanation
          }
        }
      }
    }
  }
`
