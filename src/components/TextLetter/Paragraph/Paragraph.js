import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Word } from './Word'

export const Paragraph = ({
  words,
  paragraphIndex,
  onLetterClick,
  correctLetters = [],
  wrongLetters = [],
  clearStatus = false,
}) => {
  return (
    <Wrapper>
      {words.map((word, wordIndex) => (
        <Word
          key={wordIndex}
          word={word}
          marginLeft={wordIndex === 0 ? '2rem' : null}
          paragraphIndex={paragraphIndex}
          wordIndex={wordIndex}
          onLetterClick={onLetterClick}
          clearStatus={clearStatus}
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
        />
      ))}
    </Wrapper>
  )
}

Paragraph.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  paragraphIndex: PropTypes.number.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
    .isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
    .isRequired,
  onLetterClick: PropTypes.func.isRequired,
  clearStatus: PropTypes.bool.isRequired,
}
