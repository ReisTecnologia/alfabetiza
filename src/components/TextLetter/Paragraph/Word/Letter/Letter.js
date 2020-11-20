import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'

export const Letter = ({
  letter,
  answerStatus = 'unanswered',
  paragraphIndex,
  wordIndex,
  letterIndex,
  onClick,
}) => {
  const notifyLetterIndex = (event) =>
    onClick(event, { paragraphIndex, wordIndex, letterIndex })
  return (
    <Wrapper onClick={notifyLetterIndex} answerStatus={answerStatus}>
      {letter}
    </Wrapper>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  answerStatus: PropTypes.oneOf(['unanswered', 'correct', 'wrong', 'clear']),
  paragraphIndex: PropTypes.number.isRequired,
  wordIndex: PropTypes.number.isRequired,
  letterIndex: PropTypes.number.isRequired,
}
