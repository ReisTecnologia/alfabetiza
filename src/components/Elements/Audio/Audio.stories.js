import React from 'react'
import { Audio } from './Audio'

const Template = (args) => <Audio {...args} />

export default {
  title: 'Elements/Audio',
  component: Audio,
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
