import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { AudioPlayWrapper } from './AudioPlayWrapper'
import { StatusWrapper } from './StatusWrapper'
import { AudioOnlySpeakerWrapper } from './AudioOnlySpeakerWrapper'
import { Speaker } from './Speaker'
import { useMedia } from '../useMedia'

export const AudioPlay = ({ src, children }) => {
  var audioElement = useRef(new Audio(src))
  const { play, playing, loading } = useMedia({ mediaRef: audioElement })

  return children ? (
    <AudioPlayWrapper onClick={play}>
      {children}
      <StatusWrapper>
        <Speaker loading={loading} playing={playing} />
      </StatusWrapper>
    </AudioPlayWrapper>
  ) : (
    <AudioPlayWrapper onClick={play}>
      <AudioOnlySpeakerWrapper>
        <Speaker loading={loading} playing={playing} size={60} />
      </AudioOnlySpeakerWrapper>
    </AudioPlayWrapper>
  )
}

AudioPlay.propTypes = {
  src: PropTypes.string.isRequired,
}
