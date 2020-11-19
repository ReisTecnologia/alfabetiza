import React from 'react'
import { Wrapper } from './Wrapper'
import { InnerWrapper } from './InnerWrapper'
import PropTypes from 'prop-types'
import { Card } from '../Card'
import { useCompleteState } from '../useCompleteState'
import loadable from '@loadable/component'

const AudioButton = loadable(async () => {
  const { AudioButton } = await import('../AudioButton')
  const LoadableAudioButton = (props) => <AudioButton {...props} />
  return LoadableAudioButton
})

export const AudioElement = ({ src }) => {
  const { complete, doComplete } = useCompleteState()
  return (
    <Card complete={complete}>
      <Wrapper>
        <InnerWrapper>
          <AudioButton onComplete={doComplete} src={src} />
        </InnerWrapper>
      </Wrapper>
    </Card>
  )
}

AudioElement.propTypes = {
  src: PropTypes.string,
}
