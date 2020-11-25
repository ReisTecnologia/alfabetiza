import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'

export const Letter = ({ letter, color, onClick }) => {
  return (
    <Wrapper onClick={onClick} color={color}>
      {letter.toUpperCase()}
    </Wrapper>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
}
