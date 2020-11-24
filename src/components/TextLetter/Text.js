import React, { useState } from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Paragraph } from './Paragraph'

import {
  getWordLetterIndexes,
  getParagraphWordsIndexes,
} from './getParagraphWordsIndexes'
import { addOrRemoveFromArray } from './addOrRemoveFromArray'

export const TextLetter = ({ text, correctLetters = [] }) => {
  const paragraphs = text.split('\n')
  const notEmpty = (text) => text.trim(text) !== ''
  const paragraphsWords = paragraphs
    .filter(notEmpty)
    .map((paragraph) => paragraph.trim().split(' '))

  const paragraphWordLetters = paragraphsWords.map((paragraph) =>
    paragraph.map((words) => words.split(''))
  )
  const arrayOfAllLetters = paragraphWordLetters.flat(3)

  const accentRemoval = (letterWithAccents) => {
    return letterWithAccents.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const [correctClickedLetters, setCorrectClickedLetters] = useState([])
  const [wrongClickedLetters, setWrongClickedLetters] = useState([])

  const numCorrectLetters = arrayOfAllLetters
    .map((letters) => letters.toLowerCase())
    .map((letters) => accentRemoval(letters))
    .filter((letters) => correctLetters.includes(letters)).length

  const clearStatus =
    numCorrectLetters === correctClickedLetters.length &&
    wrongClickedLetters.length === 0
      ? true
      : false

  const toggleWord = (_, { paragraphIndex, wordIndex, letterIndex }) => {
    const clickedLetterAddress = { paragraphIndex, wordIndex, letterIndex }
    const letterWithAccents =
      paragraphWordLetters[paragraphIndex][wordIndex][letterIndex]

    let letter = accentRemoval(letterWithAccents)

    const isCorrect = !!correctLetters.find(
      (correctLetter) => correctLetter.toLowerCase() === letter.toLowerCase()
    )
    if (isCorrect) {
      addOrRemoveFromArray(
        correctClickedLetters,
        clickedLetterAddress,
        setCorrectClickedLetters
      )
    } else {
      addOrRemoveFromArray(
        wrongClickedLetters,
        clickedLetterAddress,
        setWrongClickedLetters
      )
    }
  }

  return (
    <Wrapper>
      {paragraphsWords.map((singleParagraphWords, paragraphIndex) => (
        <Paragraph
          key={paragraphIndex}
          words={singleParagraphWords.map((word) => word.toUpperCase())}
          paragraphIndex={paragraphIndex}
          onLetterClick={toggleWord}
          correctLetters={getParagraphWordsIndexes(
            correctClickedLetters,
            paragraphIndex
          ).map((e, index) => [
            e,
            getWordLetterIndexes(correctClickedLetters, paragraphIndex)[index],
          ])}
          wrongLetters={getParagraphWordsIndexes(
            wrongClickedLetters,
            paragraphIndex
          ).map((e, index) => [
            e,
            getWordLetterIndexes(wrongClickedLetters, paragraphIndex)[index],
          ])}
          clearStatus={clearStatus}
        />
      ))}
    </Wrapper>
  )
}

TextLetter.propTypes = {
  text: PropTypes.string.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.string),
}
