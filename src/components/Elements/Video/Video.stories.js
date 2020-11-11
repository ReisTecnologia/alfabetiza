import React from 'react'
import { Video } from './Video'

const Template = (args) => <Video {...args} />

export default {
  title: 'Elements/Video',
  component: Video,
}

export const BasicVideo = Template.bind({})
BasicVideo.args = {
  src:
    'https://alfabetiza.s3-sa-east-1.amazonaws.com/letras/a/Boca+fazendo+os+sons+do+a.mp4',
}
