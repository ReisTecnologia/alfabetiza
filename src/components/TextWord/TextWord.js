import React, { useState } from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Paragraph } from './Paragraph'

import { getParagraphWordsIndexes } from './getParagraphWordsIndexes'
import { addOrRemoveFromArray } from './addOrRemoveFromArray'

const removePunctuation = (wordWithPunctuation) =>
  wordWithPunctuation.endsWith(',') || wordWithPunctuation.endsWith('.')
    ? wordWithPunctuation.slice(0, -1)
    : wordWithPunctuation

const notEmpty = (text) => text.trim(text) !== ''

const splitIntoParagraphWords = (text) =>
  text
    .split('\n')
    .filter(notEmpty)
    .map((paragraph) => paragraph.trim().split(' '))

const calculateNumCorrectWords = (paragraphsWords, correctWords) =>
  paragraphsWords
    .flat()
    .map((word) =>
      word.endsWith('.') || word.endsWith(',') ? word.slice(0, -1) : word
    )
    .map((word) => word.toLowerCase())
    .filter((word) => correctWords.includes(word)).length

export const TextWord = ({ text, correctWords = [] }) => {
  const paragraphsWords = splitIntoParagraphWords(text)

  const [correctClickedWords, setCorrectClickedWords] = useState([])
  const [wrongClickedWords, setWrongClickedWords] = useState([])

  const numCorrectWords = calculateNumCorrectWords(
    paragraphsWords,
    correctWords
  )

  const allCorrectWordsAreClicked =
    numCorrectWords === correctClickedWords.length
  const noWrongWordsAreClicked = wrongClickedWords.length === 0

  const clearStatus = allCorrectWordsAreClicked && noWrongWordsAreClicked

  const toggleWord = (_, { paragraphIndex, wordIndex }) => {
    const clickedWordAddress = { paragraphIndex, wordIndex }
    const wordWithPunctuation = paragraphsWords[paragraphIndex][wordIndex]
    let word = removePunctuation(wordWithPunctuation)

    const isCorrect = !!correctWords.find(
      (correctWord) => correctWord.toLowerCase() === word.toLowerCase()
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
  }

  return (
    <Wrapper>
      {paragraphsWords.map((singleParagraphWords, paragraphIndex) => {
        const onWordClick = (event, wordIndex) =>
          toggleWord(event, { wordIndex, paragraphIndex })

        return (
          <Paragraph
            key={paragraphIndex}
            words={singleParagraphWords.map((word) => word.toUpperCase())}
            paragraphIndex={paragraphIndex}
            onWordClick={onWordClick}
            correctWords={getParagraphWordsIndexes(
              correctClickedWords,
              paragraphIndex
            )}
            wrongWords={getParagraphWordsIndexes(
              wrongClickedWords,
              paragraphIndex
            )}
            clearStatus={clearStatus}
          />
        )
      })}
    </Wrapper>
  )
}

TextWord.propTypes = {
  text: PropTypes.string.isRequired,
  correctWords: PropTypes.arrayOf(PropTypes.string),
}