import React, { useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Speaker } from '../Speaker'
import { Play } from '../Play'
import { useMedia } from '../useMedia'
import { Wrapper } from './Wrapper'
import { TrailDot } from './TrailDot'

export const AudioButton = ({
  src,
  size,
  icon,
  onComplete,
  disabled,
  beforeTrailCount = 0,
  afterTrailCount = 0,
}) => {
  var audioElement = useRef(new Audio(src))
  const { play, playing, loading } = useMedia({
    mediaRef: audioElement,
    onComplete,
  })
  const playIfEnabled = useCallback(() => {
    !disabled && play()
  }, [disabled, play])

  if (loading) {
    return 'loading...'
  }
  const color = disabled ? '#E5EBE0' : playing ? '#01796f' : '#B5BBC0'
  const content =
    icon === 'speaker' ? (
      <Speaker disabled={disabled} playing={playing} size={size} />
    ) : (
      <Play disabled={disabled} playing={playing} size={size} />
    )
  return (
    <Wrapper onClick={playIfEnabled} disabled={disabled}>
      {[...Array(beforeTrailCount)].map(() => (
        <TrailDot color={color} />
      ))}
      {content}
      {[...Array(afterTrailCount)].map(() => (
        <TrailDot color={color} />
      ))}
    </Wrapper>
  )
}

AudioButton.defaultProps = {
  icon: 'speaker',
}

AudioButton.propTypes = {
  src: PropTypes.string.isRequired,
  icon: PropTypes.string,
}
