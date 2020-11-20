import React from 'react'
import { TextLetter } from './Text'

const Template = (args) => <TextLetter {...args} />

export default {
  title: 'Lib/TextLetter',
  component: TextLetter,
}

export const BasicText = Template.bind({})
BasicText.args = {
  text: `
  Comprei um sítio no sertão de Piritiba. Com dos pés de guataíba, cajú, manga e cajá.

Peguei na enxada como faz um catingueiro, fiz aceiro botei fogo, venha ver como é que tá.

`,
}

export const CorrectWordsText = Template.bind({})
CorrectWordsText.args = {
  text: `Comprei um sítio no sertão de Piritiba. Com dos pés de guataíba, cajú, manga e cajá.
Peguei na enxada como faz um catingueiro, fiz aceiro botei fogo, venha ver como é que tá.`,
  correctWords: ['comprei', 'com', 'cajú', 'cajá', 'como', 'catingueiro'],
}

export const ClearWordsText = Template.bind({})
ClearWordsText.args = {
  text: `Comprei um sítio no sertão de Piritiba. Com dos pés de guataíba, cajú, manga e cajá.
Peguei na enxada como faz um catingueiro, fiz aceiro botei fogo, venha ver como é que tá.`,
  correctWords: ['comprei', 'com', 'cajú', 'cajá', 'como', 'catingueiro'],
}
