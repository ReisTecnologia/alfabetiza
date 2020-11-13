import React from 'react'
import { Wrapper } from './Wrapper'
import { InnerWrapper } from './InnerWrapper'
import PropTypes from 'prop-types'
import { AudioButton } from '../../AudioButton'

export const Audio = ({ src }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <AudioButton src={src} />
      </InnerWrapper>
    </Wrapper>
  )
}

Audio.propTypes = {
  src: PropTypes.string,
}
