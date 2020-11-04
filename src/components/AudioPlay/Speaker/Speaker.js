import React from 'react'
import { SvgSpeaker } from './SvgSpeaker'

export const Speaker = ({ loading, playing, size }) => {
  return loading ? (
    '...loading...'
  ) : (
    <SvgSpeaker playing={playing} size={size} />
  )
}
