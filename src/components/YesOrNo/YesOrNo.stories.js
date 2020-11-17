import React from 'react'
import { YesOrNo } from './YesOrNo'

const Template = args => <YesOrNo {...args} />

export default {
  title: 'Lib/YesOrNo',
  component: YesOrNo,
  argTypes: { onComplete: { action: 'onComplete' } },
}

export const BasicYesOrNo = Template.bind({})
BasicYesOrNo.args = {
  correctAnswer: 'yes',
  urlRightAnswerExplanation:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letra+a.comec%CC%A7a+com.batata.certo.m4a',
  urlWrongAnswerExplanation:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letra+a.comec%CC%A7a+com.batata.errado.m4a',
}
