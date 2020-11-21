import React from 'react'
import PropTypes from 'prop-types'
import { LetterAndAudioElement } from '../LetterAndAudioElement'

import { VideoElement } from '../VideoElement'
import { CheckFirstLetter } from '../CheckFirstLetter'
import { Text } from './Text'
import { AudioElement } from '../AudioElement'
import { StartsWithLetterTextTaskElement } from '../StartsWithLetterTextTaskElement'

export const Elements = ({ elements }) => {
  return elements.map(
    ({ type, letter, urlAudio, urlVideo, texto, words, text }, index) => {
      let element = null
      switch (type) {
        case 'LetterAndAudio':
          element = (
            <LetterAndAudioElement key={index} letter={letter} src={urlAudio} />
          )
          break
        case 'Audio':
          element = <AudioElement key={index} src={urlAudio} />
          break
        case 'Video':
          element = <VideoElement key={index} src={urlVideo} />
          break
        case 'CheckFirstLetter':
          element = (
            <CheckFirstLetter key={index} urlAudio={urlAudio} words={words} />
          )
          break
        case 'StartsWithLetterTextTask':
          element = (
            <StartsWithLetterTextTaskElement
              key={index}
              urlAudio={urlAudio}
              letter={letter}
              text={text}
            />
          )
          break
        default:
          throw new Error(`Unknown element type: ${type}`)
      }
      return (
        <>
          {element}
          {texto && (
            <Text>
              {texto} | {urlAudio}
            </Text>
          )}
          }
        </>
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
