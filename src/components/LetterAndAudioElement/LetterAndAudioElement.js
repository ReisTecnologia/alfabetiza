import React from 'react'
import PropTypes from 'prop-types'
import { AudioButton } from '../AudioButton'
import { BigLetter } from './BigLetter'
import { CenterWrapper } from './CenterWrapper'
import { InnerWrapper } from './InnerWrapper'
import { Card } from '../Card'
import { useCompleteState } from '../useCompleteState'

export const LetterAndAudioElement = ({ letter, src }) => {
  const { complete, doComplete } = useCompleteState()

  return (
    <Card first complete={complete}>
      <CenterWrapper>
        <InnerWrapper>
          <AudioButton onComplete={doComplete} src={src} />
        </InnerWrapper>
      </CenterWrapper>
      <BigLetter>{letter}</BigLetter>
    </Card>
  )
}

LetterAndAudioElement.propTypes = {
  letter: PropTypes.string,
  src: PropTypes.string,
}
