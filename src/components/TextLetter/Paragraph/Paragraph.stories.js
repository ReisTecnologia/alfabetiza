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

// export const BasicParagraph = Template.bind({})
// BasicParagraph.args = {
//   words: [
//     ['C', 'o', 'm', 'p', 'r', 'e', 'i'],
//     ['u', 'm'],
//     ['s', 'í', 't', 'i', 'o'],
//     ['n', 'o'],
//     ['s', 'e', 'r', 't', 'ã', 'o'],
//     ['d', 'e'],
//     ['P', 'i', 'r', 'i', 't', 'i', 'b', 'a', '.'],
//     ['C', 'o', 'm'],
//     ['d', 'o', 's'],
//     ['p', 'é', 's'],
//     ['d', 'e'],
//     ['g', 'u', 'a', 't', 'a', 'í', 'b', 'a,'],
//     ['c', 'a', 'j', 'ú', ','],
//     ['m', 'a', 'n', 'g', 'a'],
//     ['e'],
//     ['c', 'a', 'j', 'á', '.'],
//   ],
//   paragraphIndex: 2,
// }
