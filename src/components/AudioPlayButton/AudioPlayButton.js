import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Speaker } from './Speaker'
import { useMedia } from '../useMedia'
import { Wrapper } from './Wrapper'

export const AudioPlayButton = ({ src }) => {
  var audioElement = useRef(new Audio(src))
  const { play, playing, loading } = useMedia({ mediaRef: audioElement })
  return (
    <Wrapper onClick={play}>
      <Speaker loading={loading} playing={playing} />
    </Wrapper>
  )
}

AudioPlayButton.propTypes = {
  src: PropTypes.string.isRequired,
}
