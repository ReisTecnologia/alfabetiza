import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Word } from './Word'

export const Paragraph = ({
  text,
  paragraphIndex,
  onWordClick,
  clickedWords = [],
}) => {
  const words = text.trim().split(' ')
  return (
    <Wrapper>
      {paragraphIndex}
      {words.map((word, wordIndex) => (
        <Word
          word={word}
          marginLeft={wordIndex === 0 ? '2rem' : null}
          paragraphIndex={paragraphIndex}
          wordIndex={wordIndex}
          onClick={onWordClick}
          answerState={
            clickedWords.includes(wordIndex) ? 'correct' : 'unanswered'
          }
        />
      ))}
    </Wrapper>
  )
}

Paragraph.propTypes = {
  words: PropTypes.string.isRequired,
  paragraphIndex: PropTypes.number.isRequired,
  onWordClick: PropTypes.func.isRequired,
  clickedWords: PropTypes.arrayOf(PropTypes.number.isRequired),
}
