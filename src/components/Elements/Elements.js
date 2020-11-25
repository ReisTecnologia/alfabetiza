import React from 'react'
import PropTypes from 'prop-types'
import { LetterAndAudioElement } from '../LetterAndAudioElement'

import { VideoElement } from '../VideoElement'
import { CheckFirstLetter } from '../CheckFirstLetter'
import { Text } from './Text'
import { AudioElement } from '../AudioElement'
import { StartsWithLetterTextTaskElement } from '../StartsWithLetterTextTaskElement'

const bucketUrlPrefix = 'https://alfabetiza.s3-sa-east-1.amazonaws.com/'
const addBucketPrefix = (relativeUri) =>
  relativeUri ? bucketUrlPrefix + relativeUri : null
export const Elements = ({ elements }) => {
  return elements.map(
    ({ type, letter, urlAudio, urlVideo, texto, words, text }, index) => {
      const fullUrlAudio = addBucketPrefix(urlAudio)
      const fullUrlVideo = addBucketPrefix(urlVideo)

      let element = null
      switch (type) {
        case 'LetterAndAudio':
          element = (
            <LetterAndAudioElement
              key={index}
              letter={letter}
              src={fullUrlAudio}
            />
          )
          break
        case 'Audio':
          element = <AudioElement key={index} src={fullUrlAudio} />
          break
        case 'Video':
          element = <VideoElement key={index} src={fullUrlVideo} />
          break
        case 'CheckFirstLetter':
          element = (
            <CheckFirstLetter
              key={index}
              urlAudio={fullUrlAudio}
              words={words}
            />
          )
          break
        case 'StartsWithLetterTextTask':
          element = (
            <StartsWithLetterTextTaskElement
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
          {texto && (
            <Text>
              {texto} <br />
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
      urlVideo: PropTypes.string,
      texto: PropTypes.string,
      text: PropTypes.string,
      words: PropTypes.object,
    })
  ),
}
