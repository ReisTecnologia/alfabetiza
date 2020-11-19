import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Titulo } from '../components/Titulo'
import { Rodape } from '../components/Rodape'
import loadable from '@loadable/component'
import { Elements } from '../components/Elements'
import PropTypes from 'prop-types'

const YesOrNo = loadable(async () => {
  const { YesOrNo } = await import('../components/YesOrNo')
  const LoadableYesOrNo = (props) => <YesOrNo {...props} />
  return LoadableYesOrNo
})

export default function Letra({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Titulo>{post.frontmatter.letra}</Titulo>
      <Container>
        ---
        <YesOrNo
          correctAnswer={'yes'}
          urlRightAnswerExplanation={
            'https://alfabetiza.s3-sa-east-1.amazonaws.com/audio.m4a'
          }
          urlWrongAnswerExplanation={
            'https://alfabetiza.s3-sa-east-1.amazonaws.com/audio.m4a'
          }
          onComplete={() => console.log('complete')}
        />
        <Elements elements={post.frontmatter.elements} />
      </Container>
      <Rodape />
    </Layout>
  )
}

Letra.propTypes = {
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
