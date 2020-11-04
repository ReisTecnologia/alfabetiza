import React from 'react'

import { Speaker } from './Speaker'

export default {
  title: 'Alfabetiza/Speaker',
  component: Speaker,
}

const Template = (args) => <Speaker {...args} />

export const Playing = Template.bind({})
Playing.args = {
  playing: true,
  loading: false,
}

export const NotPlaying = Template.bind({})
NotPlaying.args = {
  playing: false,
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  playing: false,
  loading: true,
}
