import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Word } from './Word'

export const Paragraph = ({
  words,
  paragraphIndex,
  onWordClick,
  correctWords = [],
  wrongWords = [],
  clearStatus,
}) => {
  const calculateAnswerStatus = (wordIndex) => {
    if (clearStatus === true && !correctWords.includes(wordIndex)) {
      return 'clear'
    } else if (correctWords.includes(wordIndex)) {
      return 'correct'
    } else if (wrongWords.includes(wordIndex)) {
      return 'wrong'
    } else {
      return 'unanswered'
    }
  }
  console.log('correctWords:', correctWords)
  console.log('wrongWords:', wrongWords)
  return (
    <Wrapper>
      {words.map((word, wordIndex) => (
        <Word
          key={wordIndex}
          word={word}
          marginLeft={wordIndex === 0 ? '2rem' : null}
          paragraphIndex={paragraphIndex}
          wordIndex={wordIndex}
          onClick={onWordClick}
          answerStatus={calculateAnswerStatus(wordIndex)}
        />
      ))}
    </Wrapper>
  )
}

Paragraph.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  paragraphIndex: PropTypes.number.isRequired,
  onWordClick: PropTypes.func.isRequired,
  correctWords: PropTypes.arrayOf(PropTypes.number.isRequired),
  wrongWords: PropTypes.arrayOf(PropTypes.number.isRequired),
  clearStatus: PropTypes.bool.isRequired,
}
