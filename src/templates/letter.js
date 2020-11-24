import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Titulo } from '../components/Titulo'
import { Rodape } from '../components/Rodape'
import { Elements } from '../components/Elements'
import PropTypes from 'prop-types'

export default function Letter({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Titulo>{post.frontmatter.letter}</Titulo>
      <Container>
        <Elements elements={post.frontmatter.elements} />
      </Container>
      <Rodape />
    </Layout>
  )
}

Letter.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        elements: PropTypes.any,
        letra: PropTypes.string,
      }),
    }),
  }),
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
