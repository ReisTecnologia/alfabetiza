import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { AudioPlayButton } from '../../AudioPlayButton'
import { BigLetter } from '../../BigLetter'
import { Center } from '../../Center'

export const LetterAndAudio = ({ letter, src }) => {
  return (
    <Wrapper>
      <Center>
        <AudioPlayButton src={src} />
      </Center>
      <BigLetter>{letter}</BigLetter>
    </Wrapper>
  )
}

LetterAndAudio.propTypes = {
  letter: PropTypes.string,
  src: PropTypes.string,
}
