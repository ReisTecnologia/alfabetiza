import React from 'react'

import { LetterAndAudio } from './LetterAndAudio'

export default {
  title: 'Alfabetiza/Elements/LetterAndAudio',
  component: LetterAndAudio,
}

const Template = (args) => <LetterAndAudio {...args} />

export const Primary = Template.bind({})
Primary.args = {
  letter: 'A',
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}
