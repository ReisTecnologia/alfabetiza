import React from 'react'
import PropTypes from 'prop-types'
import { Play } from './svg/Play'
import { Speaker } from './svg/Speaker'
import { ThumbsDown } from './svg/ThumbsDown'
import { ThumbsUp } from './svg/ThumbsUp'

// const colors = {
//   ready: '#B5BBC0',
//   playing: '#01796f',
//   disabled: '#E5EBE0',
// }
const components = {
  Play: Play,
  Speaker: Speaker,
  ThumbsDown: ThumbsDown,
  ThumbsUp: ThumbsUp,
}

// {/* {IconSvg} */}
export const Icon = ({
  shape = 'Play',
  color = '#000',
  onClick,
  size = 35,
}) => {
  if (!components[shape]) {
    throw new Error(`component ${shape} is not supported`)
  }
  const IconSvg = React.createElement(components[shape], { color, size })
  return (
    <div onClick={onClick} style={{ display: 'inline-block' }}>
      {IconSvg}
    </div>
  )
}

Icon.propTypes = {
  shape: PropTypes.oneOf(['Play', 'Speaker', 'ThumbsDown', 'ThumbsUp']),
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
}
