import React from 'react'
import PropTypes from 'prop-types'
import { AudioPlay } from '../AudioPlay/AudioPlay'
import { LetraGrande } from '../LetraGrande'
import { Video } from '../Video'
import { CheckFirstLetter } from '../CheckFirstLetter'
import { Text } from './Text'

export const Elements = ({ elements }) => {
  return elements.map(({ type, letra, urlAudio, urlVideo, texto }) => {
    let element = null
    switch (type) {
      case 'LetraComAudio':
        element = (
          <AudioPlay src={urlAudio}>
            <LetraGrande>{letra}</LetraGrande>
          </AudioPlay>
        )
        break
      case 'Audio':
        element = <AudioPlay src={urlAudio} />
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
