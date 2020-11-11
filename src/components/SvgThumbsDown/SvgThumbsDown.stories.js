import React from 'react'
import { SvgThumbsDown } from './SvgThumbsDown'

const Template = (args) => <SvgThumbsDown {...args} />

export default {
  title: 'Lib/SvgThumbsDown',
  component: SvgThumbsDown,
  argTypes: { onClick: { action: 'onClick' } },
}

export const Default = Template.bind({})
Default.args = {}

export const Active = Template.bind({})
Active.args = {
  mode: 'active',
}

export const Right = Template.bind({})
Right.args = {
  mode: 'right',
}

export const Wrong = Template.bind({})
Wrong.args = {
  mode: 'wrong',
}
