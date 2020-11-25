import React from 'react'
import { Word } from './Word'

const Template = (args) => <Word {...args} />

export default {
  title: 'Lib/TextLetter/Paragraph/Word',
  component: Word,
  argTypes: { onLetterClick: { action: 'onLetterClick' } },
}

export const BasicWord = Template.bind({})
BasicWord.args = {
  word: 'Alambrado',
  wordIndex: 2,
  paragraphIndex: 1,
}

export const AnsweredWord = Template.bind({})
AnsweredWord.args = {
  word: 'Alambrado',
  wordIndex: 0,
  correctLetters: [
    [0, 2],
    [0, 4],
  ],
  wrongLetters: [
    [0, 0],
    [0, 1],
    [0, 3],
  ],
}

export const MarginLeft = Template.bind({})
MarginLeft.args = {
  word: 'Alambrado',
  wordIndex: 0,
  correctLetters: [
    [0, 2],
    [0, 4],
  ],
  wrongLetters: [
    [0, 0],
    [0, 1],
    [0, 3],
  ],
  marginLeft: '40px',
}
