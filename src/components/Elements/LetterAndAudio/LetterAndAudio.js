import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { AudioButton } from '../../AudioButton'
import { BigLetter } from '../../BigLetter'
import { Center } from '../../Center'

export const LetterAndAudio = ({ letter, src }) => {
  return (
    <Wrapper>
      <Center>
        <AudioButton src={src} />
      </Center>
      <BigLetter>{letter}</BigLetter>
    </Wrapper>
  )
}

LetterAndAudio.propTypes = {
  letter: PropTypes.string,
  src: PropTypes.string,
}
