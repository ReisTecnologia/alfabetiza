import React from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { BigLetter } from './BigLetter'
import { CenterWrapper } from './CenterWrapper'
import { InnerWrapper } from './InnerWrapper'
import { Card } from '../Card'
import { useCompleteState } from '../useCompleteState'
import { colors } from '../colors'

const AudioButton = loadable(async () => {
  const { AudioButton } = await import('../AudioButton')
  return (props) => <AudioButton {...props} />
})

export const LetterAndAudioElement = ({ letter, src, actual }) => {
  const { complete, doComplete } = useCompleteState()

  return (
    <Card first complete={complete}>
      <CenterWrapper>
        <InnerWrapper>
          <AudioButton
            color={actual ? colors.actual : null}
            onComplete={doComplete}
            src={src}
          />
        </InnerWrapper>
      </CenterWrapper>
      <BigLetter>{letter}</BigLetter>
    </Card>
  )
}

LetterAndAudioElement.propTypes = {
  letter: PropTypes.string,
  src: PropTypes.string,
  actual: PropTypes.bool,
}
