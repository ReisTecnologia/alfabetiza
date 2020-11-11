import React from 'react'
import { YesOrNo } from './YesOrNo'

const Template = (args) => <YesOrNo {...args} />

export default {
  title: 'Lib/YesOrNo',
  component: YesOrNo,
  argTypes: { onComplete: { action: 'onComplete' } },
}

export const BasicYesOrNo = Template.bind({})
BasicYesOrNo.args = {
  correctAnswer: 'yes',
  urlRightAnswerExplanation:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/abelha/abelha+comec%CC%A7a+com+a.ogg',
  urlWrongAnswerExplanation:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/palavras/abelha/abelha+comec%CC%A7a+com+a.ogg',
}
