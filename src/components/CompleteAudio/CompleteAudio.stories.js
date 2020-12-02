import React from 'react'
import { CompleteAudio } from './CompleteAudio'

const Template = (args) => <CompleteAudio {...args} />

export default {
  title: 'Elements/CompleteAudio',
  component: CompleteAudio,
  onComplete: { action: 'onComplete' },
}
export const Primary = Template.bind({})
Primary.args = {
  startPlaying: true,
  src: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/a1.m4a',
}
