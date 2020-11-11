import React from 'react'
import PropTypes from 'prop-types'
import { LetterAndAudio } from './LetterAndAudio'

import { Video } from './Video'
import { CheckFirstLetter } from '../CheckFirstLetter'
import { Text } from './Text'
import { Audio } from './Audio'

export const Elements = ({ elements }) => {
  return elements.map(({ type, letra, urlAudio, urlVideo, texto }) => {
    let element = null
    switch (type) {
      case 'LetterAndAudio':
        element = <LetterAndAudio letter={letra} src={urlAudio} />
        break
      case 'Audio':
        element = <Audio src={urlAudio} />
        break
      case 'Video':
        element = <Video src={urlVideo} />
        break
      case 'CheckFirstLetter':
        element = <CheckFirstLetter urlAudio={urlAudio} />
        break
      default:
        throw new Error(`Unknown element type: ${type}`)
    }
    return (
      <>
        {element}
        {texto && <Text>{texto}</Text>}
      </>
    )
  })
}

Elements.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      letra: PropTypes.string,
      urlAudio: PropTypes.string,
      urlVideo: PropTypes.string,
    }),
  ),
}
