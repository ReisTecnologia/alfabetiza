import React, { useState } from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'

export const Word = ({
  word,
  answerState = 'unanswered',
  marginLeft,
  paragraphIndex,
  wordIndex,
  onClick,
}) => {
  const notifyWordIndex = (event) =>
    onClick(event, { paragraphIndex, wordIndex })
  return (
    <Wrapper
      onClick={notifyWordIndex}
      marginLeft={marginLeft}
      answerState={answerState}
    >
      {word}
    </Wrapper>
  )
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
  answerState: PropTypes.oneOf(['unanswered', 'correct', 'wrong']),
  paragraphIndex: PropTypes.number.isRequired,
  wordIndex: PropTypes.number.isRequired,
}
