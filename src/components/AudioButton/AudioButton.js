import React, { useRef, useCallback, useState, useEffect } from 'react'
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
  onStepChange,
  disabled,
  color,
  playingColor,
  beforeTrailCount = 0,
  afterTrailCount = 0,
}) => {
  if (!color) color = colors.ready
  if (!playingColor) playingColor = colors.playing
  const [errorCode, setErrorCode] = useState(null)

  const isSequence = typeof src === 'object'
  const [actualItem, setActualItem] = useState(isSequence ? 0 : null)

  var audioElement = useRef(new Audio())
  audioElement.current.onerror = () => {
    setErrorCode(audioElement.current.error.code)
  }

  useEffect(() => {
    audioElement.current.src = isSequence ? src[actualItem] : src
  }, [actualItem])

  const internalOnComplete = useCallback(() => {
    if (isSequence) {
      if (actualItem === src.length - 1) {
        onComplete()
      } else {
        setActualItem((actualItem) => actualItem + 1)
        onStepChange(actualItem + 1)
      }
    } else {
      onComplete()
    }
  }, [onComplete, actualItem, setActualItem])
  const { play, playing } = useMedia({
    mediaRef: audioElement,
    onComplete: internalOnComplete,
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

  const numDotsBefore = isSequence ? actualItem : beforeTrailCount
  const numDotsAfter = isSequence
    ? src.length - actualItem - 1
    : afterTrailCount
  return (
    <Wrapper onClick={playIfEnabled} disabled={disabled}>
      {[...Array(numDotsBefore)].map((n) => (
        <TrailDot key={n} color={color} />
      ))}
      {content}
      {errorCode ? `error: ${errorCode}` : null}
      {[...Array(numDotsAfter)].map((n) => (
        <TrailDot key={n} color={color} />
      ))}
    </Wrapper>
  )
}

AudioButton.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
  icon: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  onComplete: PropTypes.func,
  onStepChange: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  playingColor: PropTypes.string,
  beforeTrailCount: PropTypes.number,
  afterTrailCount: PropTypes.number,
}
