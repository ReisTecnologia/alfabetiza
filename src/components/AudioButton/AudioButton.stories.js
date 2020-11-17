import React from 'react'

import { AudioButton } from './AudioButton'

export default {
  title: 'Lib/AudioButton',
  component: AudioButton,
  argTypes: { onComplete: { action: 'onComplete' } },
}

const Template = args => <AudioButton {...args} />

export const WithAudio = Template.bind({})
WithAudio.args = {
  src: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/simples.m4a',
}

export const Small = Template.bind({})
Small.args = {
  size: 20,
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,

  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const WithoutAudio = Template.bind({})
WithoutAudio.args = {
  src: null,
}

export const PlayIcon = Template.bind({})
PlayIcon.args = {
  icon: 'play',
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const PlayIconTrail = Template.bind({})
PlayIconTrail.args = {
  beforeTrailCount: 1,
  afterTrailCount: 2,
  icon: 'play',
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const PlayIconTrailNoneBefore = Template.bind({})
PlayIconTrailNoneBefore.args = {
  beforeTrailCount: 0,
  afterTrailCount: 2,
  icon: 'play',
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const PlayIconSmall = Template.bind({})
PlayIconSmall.args = {
  icon: 'play',
  size: 20,
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const PlayIconSmallDisabled = Template.bind({})
PlayIconSmallDisabled.args = {
  disabled: true,
  icon: 'play',
  size: 20,
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}
