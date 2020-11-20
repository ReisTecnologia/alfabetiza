import React from 'react'
import { Paragraph } from './Paragraph'

const Template = (args) => <Paragraph {...args} />

export default {
  title: 'Lib/TextLetter/Paragraph',
  component: Paragraph,
  argTypes: { onWordClick: { action: 'onWordClick' } },
}

export const BasicParagraph = Template.bind({})
BasicParagraph.args = {
  words: [
    'Comprei',
    'um',
    'sítio',
    'no',
    'sertão',
    'de',
    'Piritiba.',
    'Com',
    'dos',
    'pés',
    'de',
    'guataíba,',
    'cajú,',
    'manga',
    'e',
    'cajá.',
  ],
  paragraphIndex: 2,
}

export const AnsweredWords = Template.bind({})
AnsweredWords.args = {
  paragraphIndex: 2,
  words: [
    'Comprei',
    'um',
    'sítio',
    'no',
    'sertão',
    'de',
    'Piritiba.',
    'Com',
    'dos',
    'pés',
    'de',
    'guataíba,',
    'cajú,',
    'manga',
    'e',
    'cajá.',
  ],
}

export const ClearWords = Template.bind({})
ClearWords.args = {
  paragraphIndex: 2,
  words: [
    'Comprei',
    'um',
    'sítio',
    'no',
    'sertão',
    'de',
    'Piritiba.',
    'Com',
    'dos',
    'pés',
    'de',
    'guataíba,',
    'cajú,',
    'manga',
    'e',
    'cajá.',
  ],
  clearStatus: true,
}
