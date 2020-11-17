import React from 'react'
import { Wrapper } from './Wrapper'
import { InnerWrapper } from './InnerWrapper'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { Card } from '../Card'
import { useCompleteState } from '../useCompleteState'

const AudioButton = loadable(async () => {
  const { AudioButton } = await import('../AudioButton')
  return props => <AudioButton {...props} />
})

export const AudioElement = ({ src }) => {
  const { complete, doComplete } = useCompleteState()
  console.log('AudioElement', src)
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
