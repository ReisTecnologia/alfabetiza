import React from 'react'
import { Wrapper } from './Wrapper'
import { InnerWrapper } from './InnerWrapper'
import PropTypes from 'prop-types'
import { AudioButton } from '../../AudioButton'
import { Card } from '../../Card'

export const Audio = ({ src }) => {
  return (
    <Card>
      <Wrapper>
        <InnerWrapper>
          <AudioButton src={src} />
        </InnerWrapper>
      </Wrapper>
    </Card>
  )
}

Audio.propTypes = {
  src: PropTypes.string,
}
