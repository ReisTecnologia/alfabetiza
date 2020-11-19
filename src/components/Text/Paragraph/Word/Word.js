import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { InnerWrapper } from './InnerWrapper'

export const Word = ({
  word,
  answerStatus = 'unanswered',
  marginLeft,
  paragraphIndex,
  wordIndex,
  onClick,
}) => {
  const notifyWordIndex = (event) =>
    onClick(event, { paragraphIndex, wordIndex })

  const wordWithoutPunctuation = (word) => {
    if (word.endsWith(',')) {
      return word.slice(0, -1)
    } else if (word.endsWith('.')) {
      return word.slice(0, -1)
    } else {
      return word
    }
  }
  const punctuation = (word) => {
    if (word.endsWith(',')) {
      return word.slice(-1)
    } else if (word.endsWith('.')) {
      return word.slice(-1)
    } else {
      return null
    }
  }

  return (
    <Wrapper
      onClick={notifyWordIndex}
      marginLeft={marginLeft}
      answerStatus={answerStatus}
    >
      {wordWithoutPunctuation(word)}
      <InnerWrapper word={word}>{punctuation(word)}</InnerWrapper>
    </Wrapper>
  )
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
  answerStatus: PropTypes.oneOf(['unanswered', 'correct', 'wrong', 'clear']),
  paragraphIndex: PropTypes.number.isRequired,
  wordIndex: PropTypes.number.isRequired,
}
