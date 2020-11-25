import React from 'react'
import { VideoElement } from './VideoElement'

const Template = (args) => <VideoElement {...args} />

export default {
  title: 'Elements/VideoElement',
  component: VideoElement,
}

export const BasicVideo = Template.bind({})
BasicVideo.args = {
  src: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/a1.mp4',
}

export const Actual = Template.bind({})
Actual.args = {
  actual: true,
  src: 'https://alfabetiza.s3-sa-east-1.amazonaws.com/a1.mp4',
}
