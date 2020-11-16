import React from 'react'
import { AudioElement } from './AudioElement'

const Template = (args) => <AudioElement {...args} />

export default {
  title: 'Elements/AudioElement',
  component: AudioElement,
}

export const Primary = Template.bind({})
Primary.args = {
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}

export const Trails = Template.bind({})
Trails.args = {
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Essa+aqui+e%CC%81+a+letra+a.ogg',
}
