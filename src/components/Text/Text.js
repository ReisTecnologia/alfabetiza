import React, { useState } from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Paragraph } from './Paragraph'

import { getParagraphWordsIndexes } from './getParagraphWordsIndexes'
import { addOrRemoveFromArray } from './addOrRemoveFromArray'

export const Text = ({ text, correctWords = [] }) => {
  const paragraphs = text.split('\n')
  const notEmpty = text => text.trim(text) !== ''
  const paragraphsWords = paragraphs
    .filter(notEmpty)
    .map(paragraph => paragraph.trim().split(' '))

  const [correctClickedWords, setCorrectClickedWords] = useState([])
  const [wrongClickedWords, setWrongClickedWords] = useState([])

  const mergedParagraphWords = paragraphsWords.flat()

  const caseInsensitiveParagraphs = mergedParagraphWords.map(word =>
    word.toLowerCase()
  )

  const punctuationInsensitiveParagraphs = caseInsensitiveParagraphs.map(
    word => {
      if (word.endsWith(',')) {
        return word.slice(0, -1)
      } else if (word.endsWith('.')) {
        return word.slice(0, -1)
      } else {
        return word
      }
    }
  )

  const correctWordsArray = punctuationInsensitiveParagraphs.filter(word =>
    correctWords.includes(word)
  )

  const clickedWords = []

  const toggleWord = (_, { paragraphIndex, wordIndex }) => {
    const clickedWordAddress = { paragraphIndex, wordIndex }
    const wordWithPunctuation = paragraphsWords[paragraphIndex][wordIndex]
    let word
    if (wordWithPunctuation.endsWith(',')) {
      word = wordWithPunctuation.slice(0, -1)
    } else if (wordWithPunctuation.endsWith('.')) {
      word = wordWithPunctuation.slice(0, -1)
    } else {
      word = wordWithPunctuation
    }
    const isCorrect = !!correctWords.find(
      correctWord => correctWord.toLowerCase() === word.toLowerCase()
    )
    if (isCorrect) {
      addOrRemoveFromArray(
        correctClickedWords,
        clickedWordAddress,
        setCorrectClickedWords
      )
    } else {
      addOrRemoveFromArray(
        wrongClickedWords,
        clickedWordAddress,
        setWrongClickedWords
      )
    }
    console.log(clickedWords)
    console.log(correctClickedWords)
  }

  return (
    <Wrapper>
      {paragraphsWords.map((singleParagraphWords, paragraphIndex) => (
        <Paragraph
          key={paragraphIndex}
          words={singleParagraphWords.map(word => word.toUpperCase())}
          paragraphIndex={paragraphIndex}
          onWordClick={toggleWord}
          correctWords={getParagraphWordsIndexes(
            correctClickedWords,
            paragraphIndex
          )}
          wrongWords={getParagraphWordsIndexes(
            wrongClickedWords,
            paragraphIndex
          )}
        />
      ))}
    </Wrapper>
  )
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  correctWords: PropTypes.arrayOf(PropTypes.string),
}
