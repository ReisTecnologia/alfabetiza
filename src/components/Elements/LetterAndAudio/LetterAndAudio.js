import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { AudioButton } from '../../AudioButton'
import { BigLetter } from '../../BigLetter'
import { CenterWrapper } from './CenterWrapper'
import { InnerWrapper } from './InnerWrapper'

export const LetterAndAudio = ({ letter, src }) => {
  return (
    <Wrapper>
      <CenterWrapper>
        <InnerWrapper>
          <AudioButton src={src} />
        </InnerWrapper>
      </CenterWrapper>
      <BigLetter>{letter}</BigLetter>
    </Wrapper>
  )
}

LetterAndAudio.propTypes = {
  letter: PropTypes.string,
  src: PropTypes.string,
}
