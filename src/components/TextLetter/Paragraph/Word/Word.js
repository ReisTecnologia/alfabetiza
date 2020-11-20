import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Letter } from './Letter/Letter'

export const Word = ({
  letters,
  marginLeft,
  paragraphIndex,
  wordIndex,
  onLetterClick,
  correctLetters = [],
  wrongLetters = [],
  clearStatus,
}) => {
  const answerDoubt = (letterIndex) => {
    if (clearStatus === true && !correctLetters.includes(letterIndex)) {
      return 'clear'
    } else if (correctLetters.includes(letterIndex)) {
      return 'correct'
    } else if (wrongLetters.includes(letterIndex)) {
      return 'wrong'
    } else {
      return 'unanswered'
    }
  }
  const word = letters.join('')
  console.log(word)
  console.log(letters)
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
          answerStatus={answerDoubt(letterIndex, correctLetters, wrongLetters)}
        />
      ))}
    </Wrapper>
  )
}

Word.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  marginLeft: PropTypes.string,
  onLetterClick: PropTypes.func.isRequired,
  paragraphIndex: PropTypes.number.isRequired,
  wordIndex: PropTypes.number.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.number).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.number).isRequired,
  clearStatus: PropTypes.bool.isRequired,
}
