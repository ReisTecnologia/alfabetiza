import React from 'react'
import { AudioElement } from './AudioElement'

const Template = args => <AudioElement {...args} />

export default {
  title: 'Elements/AudioElement',
  component: AudioElement,
}

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/audio.m4a',
}

export const Trails = Template.bind({})
Trails.args = {
  src: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/audio.m4a',
}
