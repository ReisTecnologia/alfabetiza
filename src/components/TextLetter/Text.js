import React, { useState } from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { Paragraph } from './Paragraph'

import { getParagraphWordsIndexes } from './getParagraphWordsIndexes'
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
  console.log(paragraphWordLetters)
  const arrayOfAllLetters = paragraphWordLetters.flat(3)

  const [correctClickedLetters, setCorrectClickedLetters] = useState([])
  const [wrongClickedLetters, setWrongClickedLetters] = useState([])

  const numCorrectLetters = arrayOfAllLetters
    .map((letters) => letters.toLowerCase())
    .filter((letters) => correctLetters.includes(letters))
  console.log(correctLetters)
  console.log(numCorrectLetters)

  // const numCorrectWords = paragraphsWords
  //   .flat()
  //   .map((word) =>
  //     word.endsWith('.') || word.endsWith(',') ? word.slice(0, -1) : word
  //   )
  //   .map((word) => word.toLowerCase())
  //   .filter((word) => correctWords.includes(word)).length

  const clearStatus =
    numCorrectLetters === correctClickedLetters.length &&
    wrongClickedLetters.length === 0
      ? true
      : false

  const toggleWord = (_, { paragraphIndex, wordIndex, letterIndex }) => {
    const clickedLetterAddress = { paragraphIndex, wordIndex, letterIndex }
    const letter = paragraphWordLetters[paragraphIndex][wordIndex][letterIndex]

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
      {paragraphsWords.map(
        (singleParagraphWords, paragraphIndex, wordIndex) => (
          <Paragraph
            key={paragraphIndex}
            words={singleParagraphWords.map((word) => word.toUpperCase())}
            paragraphIndex={paragraphIndex}
            onLetterClick={toggleWord}
            correctLetters={getParagraphWordsIndexes(
              correctClickedLetters,
              paragraphIndex,
              wordIndex
            )}
            wrongLetters={getParagraphWordsIndexes(
              wrongClickedLetters,
              paragraphIndex,
              wordIndex
            )}
            clearStatus={clearStatus}
          />
        )
      )}
    </Wrapper>
  )
}

TextLetter.propTypes = {
  text: PropTypes.string.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.string),
}
