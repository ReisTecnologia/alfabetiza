import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { InnerWrapper } from './InnerWrapper'

export const Letter = ({ letter, color, onClick }) => {
  const checkIfLetter = (letter) =>
    letter === ',' ? '' : letter === '.' ? '' : letter

  const checkIfPunctuation = (letter) =>
    letter === ',' ? letter : letter === '.' ? letter : null

  const letra = checkIfLetter(letter)
  const punctuation = checkIfPunctuation(letter)
  return (
    <Wrapper onClick={onClick} color={color}>
      {letra.toUpperCase()}
      {punctuation && (
        <InnerWrapper punctuation={punctuation}>{punctuation}</InnerWrapper>
      )}
    </Wrapper>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
}
