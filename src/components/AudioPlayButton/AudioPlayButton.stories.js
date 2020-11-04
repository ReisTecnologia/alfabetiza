import React from 'react'

import { AudioPlayButton } from './AudioPlayButton'

export default {
  title: 'Alfabetiza/AudioPlayButton',
  component: AudioPlayButton,
}

const Template = (args) => <AudioPlayButton {...args} />

export const WithAudio = Template.bind({})
WithAudio.args = {
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const Small = Template.bind({})
Small.args = {
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const WithoutAudio = Template.bind({})
WithoutAudio.args = {
  src: null,
}
