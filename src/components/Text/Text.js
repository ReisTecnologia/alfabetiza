import React, { useState } from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Paragraph } from './Paragraph'
import isEqual from 'lodash.isequal'

export const Text = ({ text, correctWords }) => {
  const paragraphs = text.split('\n')
  const [clickedWords, setClickedWords] = useState([])
  const notEmpty = (text) => text.trim(text) !== ''
  const toggleWord = (_, { paragraphIndex, wordIndex }) => {
    const clickedWordAddress = { paragraphIndex, wordIndex }
    const indexOfExistentWord = clickedWords.findIndex((wordAddress) =>
      isEqual(wordAddress, clickedWordAddress),
    )
    if (indexOfExistentWord !== -1) {
      setClickedWords(
        clickedWords.filter((_, index) => index !== indexOfExistentWord),
      )
    } else {
      setClickedWords([...clickedWords, clickedWordAddress])
    }
  }
  const filterByParagraph = (filteredParagraphIndex) => ({ paragraphIndex }) =>
    paragraphIndex === filteredParagraphIndex

  return (
    <Wrapper>
      {paragraphs.filter(notEmpty).map((paragraph, paragraphIndex) => {
        const paragraphClickWords = clickedWords
          .filter(filterByParagraph(paragraphIndex))
          .map(({ wordIndex }) => wordIndex)

        return (
          <Paragraph
            text={paragraph}
            paragraphIndex={paragraphIndex}
            onWordClick={toggleWord}
            clickedWords={paragraphClickWords}
          />
        )
      })}
    </Wrapper>
  )
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  correctWords: PropTypes.arrayOf(PropTypes.string),
}
