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

export const CorrectLettersText = Template.bind({})
CorrectLettersText.args = {
  text: `Comprei um sítio no sertão de Piritiba. Com dos pés de guataíba, cajú, manga e cajá.
Peguei na enxada como faz um catingueiro, fiz aceiro botei fogo, venha ver como é que tá.`,
  correctLetters: ['c', 'f'],
}

export const ClearLettersText = Template.bind({})
ClearLettersText.args = {
  text: `Sertão de guataíba.
  Enxada`,
  correctLetters: ['a', 'g'],
}
