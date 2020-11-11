import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { AudioButton } from '../../AudioButton'

export const Audio = ({ src }) => {
  return (
    <Wrapper>
      <AudioButton src={src} />
    </Wrapper>
  )
}

Audio.propTypes = {
  src: PropTypes.string,
}
