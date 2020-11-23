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

  const wordWithoutPunctuation = (word) =>
    word.endsWith('.') || word.endsWith(',') ? word.slice(0, -1) : word

  const punctuation = (word) =>
    word.endsWith('.') || word.endsWith(',') ? word.slice(-1) : null

  const punctuationToAdd = punctuation(word)

  return (
    <Wrapper
      onClick={notifyWordIndex}
      marginLeft={marginLeft}
      answerStatus={answerStatus}
    >
      {wordWithoutPunctuation(word)}
      {punctuationToAdd && (
        <InnerWrapper word={word}>{punctuationToAdd}</InnerWrapper>
      )}
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
