import React from 'react'
import { SimpleAudio } from './SimpleAudio'

const Template = (args) => <SimpleAudio {...args} />

export default {
  title: 'Elements/CompleteAudio',
  component: SimpleAudio,
  onComplete: { action: 'onComplete' },
}
export const Primary = Template.bind({})
Primary.args = {
  startPlaying: true,
  src: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/a1.m4a',
}
