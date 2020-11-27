import { useMedia } from '../useMedia'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Wrapper } from './Wrapper'

export const CompleteAudio = ({ src, whenToPlay }) => {
  var audioElement = useRef(new Audio(src))

  const { play } = useMedia({
    mediaRef: audioElement,
  })
  useEffect(() => {
    if (whenToPlay) {
      play()
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
