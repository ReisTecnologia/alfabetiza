import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Wrapper } from './Wrapper'

export const CompleteAudio = ({ src, startPlaying, onComplete }) => {
  var audioElement = useRef(new Audio(src))

  useEffect(() => {
    if (startPlaying) {
      audioElement.current.play()
      onComplete && onComplete()
    } else {
      return
    }
  }, [startPlaying])
  return <Wrapper />
}

CompleteAudio.propTypes = {
  src: PropTypes.string,
  startPlaying: PropTypes.bool,
  onComplete: PropTypes.func,
}
