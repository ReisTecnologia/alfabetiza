import React from 'react'

import { LetterAndAudioElement } from './LetterAndAudioElement'

export default {
  title: 'Elements/LetterAndAudio',
  component: LetterAndAudioElement,
}

const Template = (args) => <LetterAndAudioElement {...args} />

export const Primary = Template.bind({})
Primary.args = {
  letter: 'A',
  src: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/a1.m4a',
}
