import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Wrapper } from './Wrapper'

export const CompleteAudio = ({ src, whenToPlay }) => {
  var audioElement = useRef(new Audio(src))

  useEffect(() => {
    if (whenToPlay) {
      audioElement.current.play()
    } else {
      return
    }
  }, [whenToPlay])
  return <Wrapper />
}

CompleteAudio.propTypes = {
  src: PropTypes.string,
  whenToPlay: PropTypes.bool,
}
