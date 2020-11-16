import React from 'react'
import PropTypes from 'prop-types'
import { LetterAndAudioElement } from '../LetterAndAudioElement'

import { VideoElement } from '../VideoElement'
import { CheckFirstLetter } from '../CheckFirstLetter'
import { Text } from './Text'
import { AudioElement } from '../AudioElement'

export const Elements = ({ elements }) => {
  return elements.map(({ type, letra, urlAudio, urlVideo, texto, words }) => {
    let element = null
    switch (type) {
      case 'LetterAndAudio':
        element = <LetterAndAudioElement letter={letra} src={urlAudio} />
        break
      case 'Audio':
        element = <AudioElement src={urlAudio} />
        break
      case 'Video':
        element = <VideoElement src={urlVideo} />
        break
      case 'CheckFirstLetter':
        element = <CheckFirstLetter urlAudio={urlAudio} words={words} />
        break
      default:
        throw new Error(`Unknown element type: ${type}`)
    }
    return (
      <>
        {element}
        {/* {texto && <Text>{texto}</Text>} */}
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
