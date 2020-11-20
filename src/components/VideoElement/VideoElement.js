import React, { useRef } from 'react'
import { VideoElementWrapper } from './VideoElementWrapper'
import { PlayWrapper } from './PlayWrapper'
import { VideoComponent } from './VideoComponent'

import { useMedia } from '../useMedia'
import { Card } from '../Card'
import { useCompleteState } from '../useCompleteState'
import { Icon } from '../Icon'
import { colors } from '../colors'

export const VideoElement = ({ src }) => {
  const videoEl = useRef(null)
  const { complete, doComplete } = useCompleteState()
  const { play, playing } = useMedia({
    mediaRef: videoEl,
    onComplete: doComplete,
  })

  return (
    <Card complete={complete}>
      <VideoElementWrapper onClick={play}>
        <PlayWrapper playing={playing}>
          <Icon color={playing ? colors.playing : colors.ready} />
        </PlayWrapper>
        <VideoComponent ref={videoEl}>
          <source src={src} type="video/mp4" />
        </VideoComponent>
      </VideoElementWrapper>
    </Card>
  )
}
