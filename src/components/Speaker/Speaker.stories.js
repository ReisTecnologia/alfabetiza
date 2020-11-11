import React from 'react'
import { Speaker } from './Speaker'

export default {
  title: 'Lib/Speaker',
  component: Speaker,
}

const Template = (args) => <Speaker {...args} />

export const Playing = Template.bind({})
Playing.args = {
  playing: true,
}

export const Small = Template.bind({})
Small.args = {
  playing: true,
  size: 20,
}

export const NotPlaying = Template.bind({})
NotPlaying.args = {
  playing: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
