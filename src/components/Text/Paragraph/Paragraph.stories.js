import React from 'react'
import { Paragraph } from './Paragraph'

const Template = (args) => <Paragraph {...args} />

export default {
  title: 'Lib/Text/Paragraph',
  component: Paragraph,
  argTypes: { onWordClick: { action: 'onWordClick' } },
}

export const BasicParagraph = Template.bind({})
BasicParagraph.args = {
  text:
    'Comprei um sítio no sertão de Piritiba. Com dos pés de guataíba, cajú, manga e cajá.',
  paragraphIndex: 2,
}

export const ClickedWords = Template.bind({})
ClickedWords.args = {
  text:
    'Comprei um sítio no sertão de Piritiba. Com dos pés de guataíba, cajú, manga e cajá.',
  paragraphIndex: 2,
  clickedWords: [0, 4, 6, 7, 8],
}
