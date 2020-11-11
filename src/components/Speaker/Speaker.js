import React from 'react'
import { SvgSpeaker } from './SvgSpeaker'

export const Speaker = ({ loading, playing, size, disabled }) => {
  return loading ? (
    '...loading...'
  ) : (
    <SvgSpeaker playing={playing} size={size} disabled={disabled} />
  )
}
