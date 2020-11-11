import React from 'react'

import { CheckFirstLetter } from './CheckFirstLetter'

const words = [
  {
    word: 'pessoa',
    urlWord:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/pessoa.ogg',
    startsWithTheLetter: false,
    urlRightAnswerExplanation:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/pessoa.ogg',
    // urlRightAnswerExplanation:
    //   'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/errado%2C+pessoa+na%CC%83o+comec%CC%A7a+com+a.ogg',
    urlWrongAnswerExplanation:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/errado%2C+pessoa+na%CC%83o+comec%CC%A7a+com+a.ogg',
  },
  {
    word: 'pessoa',
    urlWord:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/pessoa.ogg',
    startsWithTheLetter: false,
    urlRightAnswerExplanation:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/pessoa.ogg',
    // urlRightAnswerExplanation:
    //   'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/errado%2C+pessoa+na%CC%83o+comec%CC%A7a+com+a.ogg',
    urlWrongAnswerExplanation:
      'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/pessoa/errado%2C+pessoa+na%CC%83o+comec%CC%A7a+com+a.ogg',
  },
  // {
  //   word: 'abelha',
  //   urlWord:
  //     'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/abelha/abelha.ogg',
  //   startsWithTheLetter: true,
  //   urlRightAnswerExplanation:
  //     'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/abelha/abelha+comec%CC%A7a+com+a.ogg',
  //   urlWrongAnswerExplanation:
  //     'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/abelha/abelha+comec%CC%A7a+com+a.ogg',
  // },
]

export default {
  title: 'Elements/CheckFirstLetter',
  component: CheckFirstLetter,
}

const Template = (args) => <CheckFirstLetter {...args} />

export const Primary = Template.bind({})
Primary.args = {
  words,
  urlAudio:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}
