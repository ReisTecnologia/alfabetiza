import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Letter } from './Letter/Letter'

const answerColors = {
  unanswered: '#333',
  wrong: '#b33',
  correct: '#6b6',
  clear: '#696',
}

const calculateAnswerStatus = (
  correctLetters,
  wrongLetters,
  clearStatus,
  letterIndex
) => {
  const isCorrect = correctLetters.includes(letterIndex)
  const isWrong = wrongLetters.includes(letterIndex)
  return clearStatus && !isCorrect
    ? 'clear'
    : isCorrect
    ? 'correct'
    : isWrong
    ? 'wrong'
    : 'unanswered'
}

export const Word = ({
  word,
  marginLeft,
  onLetterClick,
  correctLetters = [],
  wrongLetters = [],
  clearStatus,
}) => {
  return (
    <Wrapper marginLeft={marginLeft}>
      {word.map((letter, letterIndex) => {
        const answerStatus = calculateAnswerStatus(
          correctLetters,
          wrongLetters,
          clearStatus,
          letterIndex,
          correctLetters,
          wrongLetters
        )
        return (
          <Letter
            key={letterIndex}
            letter={letter}
            onClick={(event) => onLetterClick(event, letterIndex)}
            color={answerColors[answerStatus]}
          />
        )
      })}
    </Wrapper>
  )
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
  onLetterClick: PropTypes.func.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.number).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.number).isRequired,
  clearStatus: PropTypes.bool.isRequired,
}
