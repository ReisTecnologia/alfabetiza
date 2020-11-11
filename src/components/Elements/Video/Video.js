import React, { useRef } from 'react'
import { VideoWrapper } from './VideoWrapper'
import { StatusWrapper } from './StatusWrapper'
import { VideoComponent } from './VideoComponent'
import { Status } from './Status'
import { useMedia } from '../../useMedia'

export const Video = ({ src }) => {
  const videoEl = useRef(null)
  const { play, playing, loading } = useMedia({ mediaRef: videoEl })

  return (
    <VideoWrapper onClick={play}>
      <StatusWrapper>
        <Status loading={loading} playing={playing} />
      </StatusWrapper>
      <VideoComponent ref={videoEl}>
        <source src={src} type="video/mp4" />
      </VideoComponent>
    </VideoWrapper>
  )
}
