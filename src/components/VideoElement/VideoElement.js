import React, { useRef } from 'react'
import { VideoElementWrapper } from './VideoElementWrapper'
import { PlayWrapper } from './PlayWrapper'
import { VideoComponent } from './VideoComponent'

import { useMedia } from '../useMedia'
import { Card } from '../Card'
import { useCompleteState } from '../useCompleteState'
import { Play } from '../Play'

export const VideoElement = ({ src }) => {
  const videoEl = useRef(null)
  const { complete, doComplete } = useCompleteState()
  const { play, playing, loading } = useMedia({
    mediaRef: videoEl,
    onComplete: doComplete,
  })

  return (
    <Card complete={complete}>
      <VideoElementWrapper onClick={play}>
        <PlayWrapper playing={playing}>
          <Play disabled={loading} playing={playing} />
        </PlayWrapper>
        <VideoComponent ref={videoEl}>
          <source src={src} type="video/mp4" />
        </VideoComponent>
      </VideoElementWrapper>
    </Card>
  )
}
