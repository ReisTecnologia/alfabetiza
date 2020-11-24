import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Letter } from './Letter/Letter'

export const Word = ({
  word,
  marginLeft,
  paragraphIndex,
  wordIndex,
  onLetterClick,
  correctLetters = [],
  wrongLetters = [],
  clearStatus,
}) => {
  const letters = word.split('')

  const letterComparison = (correctLetters, [wordIndex, letterIndex]) => {
    let stringWordLetterIndex = JSON.stringify([wordIndex, letterIndex])

    let comparisonFunction = correctLetters.some(function(element) {
      return JSON.stringify(element) === stringWordLetterIndex
    })
    return comparisonFunction
  }
  const calculateAnswerStatus = (wordIndex, letterIndex) => {
    if (
      clearStatus === true &&
      !letterComparison(correctLetters, [wordIndex, letterIndex]) === true
    ) {
      return 'clear'
    } else if (
      letterComparison(correctLetters, [wordIndex, letterIndex]) === true
    ) {
      return 'correct'
    } else if (
      letterComparison(wrongLetters, [wordIndex, letterIndex]) === true
    ) {
      return 'wrong'
    } else {
      return 'unanswered'
    }
  }

  return (
    <Wrapper marginLeft={marginLeft}>
      {letters.map((letter, letterIndex) => (
        <Letter
          key={letterIndex}
          letter={letter}
          wordIndex={wordIndex}
          letterIndex={letterIndex}
          paragraphIndex={paragraphIndex}
          onClick={onLetterClick}
          answerStatus={calculateAnswerStatus(
            wordIndex,
            letterIndex,
            correctLetters,
            wrongLetters
          )}
        />
      ))}
    </Wrapper>
  )
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
  onLetterClick: PropTypes.func.isRequired,
  paragraphIndex: PropTypes.number.isRequired,
  wordIndex: PropTypes.number.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.number).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.number).isRequired,
  clearStatus: PropTypes.bool.isRequired,
}
