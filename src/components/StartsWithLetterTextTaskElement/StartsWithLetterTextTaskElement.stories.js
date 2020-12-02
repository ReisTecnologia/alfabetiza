import React from 'react'
import { StartsWithLetterTextTaskElement } from './StartsWithLetterTextTaskElement'

const Template = (args) => <StartsWithLetterTextTaskElement {...args} />

export default {
  title: 'Elements/StartsWithLetterTextTaskElement',
  component: StartsWithLetterTextTaskElement,
  argTypes: { onComplete: { action: 'onComplete' } },
}

export const BasicStartsWithLetterTextTaskElement = Template.bind({})
BasicStartsWithLetterTextTaskElement.args = {
  urlAudio: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/a1.m4a',
  letter: 'a',
  text: `Antes de ontem, dona Prudência foi a feira.
    Garantir as compras do mês.`,
}

export const Actual = Template.bind({})
Actual.args = {
  actual: true,
  urlAudio: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/a1.m4a',
  letter: 'a',
  text: `Antes de ontem, dona Prudência foi a feira.
    Garantir as compras do mês.`,
}
