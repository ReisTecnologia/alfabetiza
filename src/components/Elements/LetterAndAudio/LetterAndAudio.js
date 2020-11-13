import React from 'react'
import PropTypes from 'prop-types'
import { AudioButton } from '../../AudioButton'
import { BigLetter } from './BigLetter'
import { CenterWrapper } from './CenterWrapper'
import { InnerWrapper } from './InnerWrapper'
import { Card } from '../../Card'

export const LetterAndAudio = ({ letter, src }) => {
  return (
    <Card first>
      <CenterWrapper>
        <InnerWrapper>
          <AudioButton src={src} />
        </InnerWrapper>
      </CenterWrapper>
      <BigLetter>{letter}</BigLetter>
    </Card>
  )
}

LetterAndAudio.propTypes = {
  letter: PropTypes.string,
  src: PropTypes.string,
}
