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
}) => {
  return (
    <Wrapper>
      {paragraphIndex}
      {words.map((word, wordIndex) => (
        <Word
          key={wordIndex}
          word={word}
          marginLeft={wordIndex === 0 ? '2rem' : null}
          paragraphIndex={paragraphIndex}
          wordIndex={wordIndex}
          onClick={onWordClick}
          answerStatus={
            correctWords.includes(wordIndex)
              ? 'correct'
              : wrongWords.includes(wordIndex)
              ? 'wrong'
              : 'unanswered'
          }
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
}
