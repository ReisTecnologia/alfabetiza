import React, { useRef } from 'react'
import { VideoWrapper } from './VideoWrapper'
import { StatusWrapper } from './StatusWrapper'
import { VideoComponent } from './VideoComponent'
import { Status } from './Status'
import { useMedia } from '../useMedia'
import { Card } from '../Card'
import { useCompleteState } from '../useCompleteState'

export const VideoElement = ({ src }) => {
  const videoEl = useRef(null)
  const { complete, doComplete } = useCompleteState()
  const { play, playing, loading } = useMedia({
    mediaRef: videoEl,
    onComplete: doComplete,
  })

  return (
    <Card complete={complete}>
      <VideoWrapper onClick={play}>
        <StatusWrapper>
          <Status loading={loading} playing={playing} />
        </StatusWrapper>
        <VideoComponent ref={videoEl}>
          <source src={src} type="video/mp4" />
        </VideoComponent>
      </VideoWrapper>
    </Card>
  )
}
