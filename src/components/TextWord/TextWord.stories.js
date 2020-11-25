import React from 'react'
import { TextWord } from './TextWord'
import { colors } from '../colors'
const Template = (args) => <TextWord {...args} />

export default {
  title: 'Lib/TextWord',
  component: TextWord,
  onComplete: { action: 'onComplete' },
}

export const BasicText = Template.bind({})
BasicText.args = {
  text: `Avançar com paciência.
Seguir a rota avaliando.
`,
}

export const CorrectWordsText = Template.bind({})
CorrectWordsText.args = {
  text: `Avançar com paciência.
Seguir a rota avaliando.
`,
  correctWords: ['avançar', 'avaliando'],
}

export const ClearWordsText = Template.bind({})
ClearWordsText.args = {
  text: `Avançar com paciência.
Seguir a rota avaliando.
`,
  correctWords: ['avançar', 'avaliando'],
}

export const Color = Template.bind({})
Color.args = {
  text: `Avançar com paciência.
Seguir a rota avaliando.
`,
  correctWords: ['avançar', 'avaliando'],
  color: colors.ready,
}
