import React from 'react'
import { Play } from './Play'

const Template = (args) => <Play {...args} />

export default {
  title: 'Lib/Play',
  component: Play,
}

export const NotPlaying = Template.bind({})
NotPlaying.args = {
  playing: false,
}

export const Playing = Template.bind({})
Playing.args = {
  playing: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const Small = Template.bind({})
Small.args = {
  playing: true,
  size: 20,
}
