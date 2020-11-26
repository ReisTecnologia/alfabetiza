import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { LetterAndAudioElement } from '../LetterAndAudioElement'

import { VideoElement } from '../VideoElement'

import { CheckFirstLetter } from '../CheckFirstLetter'
import { Text } from './Text'
import { AudioElement } from '../AudioElement'
import { StartsWithLetterTextTaskElement } from '../StartsWithLetterTextTaskElement'

const SHOW_TEXTOS = false

const bucketUrlPrefix = 'https://alfabetiza.s3-sa-east-1.amazonaws.com/'
const addBucketPrefix = (relativeUri) =>
  relativeUri ? bucketUrlPrefix + relativeUri : null
const addBucketPrefixToWords = (words) =>
  words.map((word) => ({
    ...word,
    urlWord: addBucketPrefix(word.urlWord),
    urlRightAnswerExplanation: addBucketPrefix(word.urlRightAnswerExplanation),
    urlWrongAnswerExplanation: addBucketPrefix(word.urlWrongAnswerExplanation),
  }))

export const Elements = ({ elements }) => {
  const [actualElement, setActualElement] = useState(0)

  return elements.map(
    (
      { type, letter, urlAudio, urlAudios, urlVideo, texto, words, text },
      index
    ) => {
      console.log('map...')

      const fullUrlAudio = urlAudios
        ? urlAudios.map(addBucketPrefix)
        : addBucketPrefix(urlAudio)
      const fullUrlVideo = addBucketPrefix(urlVideo)

      let element = null
      const actual = actualElement === index
      console.log('>>>>>>> >>>>>> a')
      const onComplete = () => {
        setActualElement(() => index + 1)
      }
      // const onComplete = useCallBack(
      //   (onCompleteData) => {
      //     console.log('onComplete', onCompleteData)
      //   },
      //   [setActualElement]
      // )
      console.log('>>>>>>> >>>>>>', type, '--', fullUrlAudio)
      switch (type) {
        case 'LetterAndAudio':
          element = (
            <LetterAndAudioElement
              onComplete={onComplete}
              actual={actual}
              key={index}
              letter={letter}
              src={fullUrlAudio}
            />
          )
          break

        case 'Audio':
          element = (
            <AudioElement
              onComplete={onComplete}
              actual={actual}
              key={index}
              src={fullUrlAudio}
            />
          )
          break
        case 'Video':
          element = (
            <VideoElement
              onComplete={onComplete}
              actual={actual}
              key={index}
              src={fullUrlVideo}
            />
          )
          break
        case 'CheckFirstLetter':
          element = (
            <CheckFirstLetter
              onComplete={onComplete}
              actual={actual}
              key={index}
              src={fullUrlAudio}
              words={addBucketPrefixToWords(words)}
            />
          )
          break
        case 'StartsWithLetterTextTask':
          element = (
            <StartsWithLetterTextTaskElement
              onComplete={onComplete}
              actual={actual}
              key={index}
              urlAudio={fullUrlAudio}
              letter={letter}
              text={text}
            />
          )
          break
        default:
          throw new Error(`Unknown element type: ${type}`)
      }
      return (
        <span key={index}>
          {element}
          {texto && SHOW_TEXTOS && (
            <Text>
              {texto}
              <br />
              {fullUrlAudio}
              {fullUrlVideo}
            </Text>
          )}
        </span>
      )
    }
  )
}

Elements.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      letter: PropTypes.string,
      urlAudio: PropTypes.string,
      urlAudios: PropTypes.arrayOf(PropTypes.string),
      urlVideo: PropTypes.string,
      texto: PropTypes.string,
      text: PropTypes.string,
      words: PropTypes.object,
    })
  ),
}
