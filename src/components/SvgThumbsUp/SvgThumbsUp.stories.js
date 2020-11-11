import React from 'react'
import { SvgThumbsUp } from './SvgThumbsUp'

const Template = (args) => <SvgThumbsUp {...args} />

export default {
  title: 'Lib/SvgThumbsUp',
  component: SvgThumbsUp,
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
