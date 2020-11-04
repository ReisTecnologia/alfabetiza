import React from 'react'

import { AudioPlay } from './AudioPlay'

export default {
  title: 'Alfabetiza/AudioPlay',
  component: AudioPlay,
}

const Template = (args) => <AudioPlay {...args} />

export const WithAudio = Template.bind({})
WithAudio.args = {
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}
