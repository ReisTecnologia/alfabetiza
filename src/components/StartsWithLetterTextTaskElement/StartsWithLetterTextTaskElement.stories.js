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
  text:
    'A dona Prudência é uma dama que salvou alguns cavaleiros e alguns cavalheiros. Deu-lhes equilíbrio e uma atitude mais ponderada. Pois quando estava com eles os aconselhava a pensar duas vezes antes de fazer algo que pudesse prejudicá-los.\nEla é grande amiga da dona temperança.',
}
