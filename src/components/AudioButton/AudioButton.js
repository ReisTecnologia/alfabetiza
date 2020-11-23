import React, { useRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'
import { useMedia } from '../useMedia'
import { Wrapper } from './Wrapper'
import { TrailDot } from './TrailDot'
import { colors } from '../colors'

export const AudioButton = ({
  src,
  size,
  icon = 'Speaker',
  onClick,
  onComplete,
  disabled,
  color,
  playingColor,
  beforeTrailCount = 0,
  afterTrailCount = 0,
}) => {
  if (!color) color = colors.ready
  if (!playingColor) playingColor = colors.playing
  const [errorCode, setErrorCode] = useState(null)

  var audioElement = useRef(new Audio(src))
  audioElement.current.onerror = () => {
    setErrorCode(audioElement.current.error.code)
  }
  const { play, playing } = useMedia({
    mediaRef: audioElement,
    onComplete,
  })
  const playIfEnabled = useCallback(() => {
    if (!disabled) {
      play()
      onClick && onClick()
    }
  }, [disabled, play])

  if (!playingColor) playingColor = color
  const showColor = errorCode ? colors.wrong : playing ? playingColor : color
  const content = <Icon shape={icon} color={showColor} size={size} />
  return (
    <Wrapper onClick={playIfEnabled} disabled={disabled}>
      {[...Array(beforeTrailCount)].map(() => (
        <TrailDot key="beforeDots" color={color} />
      ))}
      {content}
      {errorCode ? `error: ${errorCode}` : null}
      {[...Array(afterTrailCount)].map(() => (
        <TrailDot key="afterDots" color={color} />
      ))}
    </Wrapper>
  )
}

AudioButton.propTypes = {
  src: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  onComplete: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  playingColor: PropTypes.string,
  beforeTrailCount: PropTypes.number,
  afterTrailCount: PropTypes.number,
}
