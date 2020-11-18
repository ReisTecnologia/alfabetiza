import React from 'react'

import { CheckFirstLetter } from './CheckFirstLetter'

const words = [
  {
    word: 'amizade',
    urlWord:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras.amizade.m4a',
    startsWithTheLetter: true,
    urlRightAnswerExplanation:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/letra+a.comec%CC%A7a+com.amizade.certo.m4a',
    // urlRightAnswerExplanation:
    //   'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/errado%2C+pessoa+na%CC%83o+comec%CC%A7a+com+a.ogg',
    urlWrongAnswerExplanation:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/letra+a.comec%CC%A7a+com.amizade.errado.m4a',
  },
  {
    word: 'batata',
    urlWord:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras.batata.m4a',
    startsWithTheLetter: false,
    urlRightAnswerExplanation:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/letra+a.comec%CC%A7a+com.batata.certo.m4a',
    // urlRightAnswerExplanation:
    //   'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/errado%2C+pessoa+na%CC%83o+comec%CC%A7a+com+a.ogg',
    urlWrongAnswerExplanation:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/letra+a.comec%CC%A7a+com.batata.errado.m4a',
  },
]

export default {
  title: 'Elements/CheckFirstLetter',
  component: CheckFirstLetter,
}

const Template = args => <CheckFirstLetter {...args} />

export const Primary = Template.bind({})
Primary.args = {
  words,
  urlAudio:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}
