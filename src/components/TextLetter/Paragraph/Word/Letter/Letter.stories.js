import React from 'react'
import { Letter } from './Letter'

const Template = (args) => <Letter {...args} />

export default {
  title: 'Lib/TextLetter/Paragraph/Word/Letter',
  component: Letter,
  argTypes: { onClick: { action: 'onClick' } },
}

export const BasicLetter = Template.bind({})
BasicLetter.args = {
  letter: 'a',
  wordIndex: 2,
  paragraphIndex: 1,
  letterIndex: 3,
}

export const CorrectLetter = Template.bind({})
CorrectLetter.args = {
  letter: 'a',
  answerStatus: 'correct',
}

export const WrongLetter = Template.bind({})
WrongLetter.args = {
  letter: 'a',
  answerStatus: 'wrong',
}

export const ClearLetter = Template.bind({})
ClearLetter.args = {
  letter: 'a',
  answerStatus: 'clear',
}
