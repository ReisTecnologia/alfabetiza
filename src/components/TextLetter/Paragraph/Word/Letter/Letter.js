import React from 'react'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { InnerWrapper } from './InnerWrapper'

export const Letter = ({ letter, color, onClick }) => {
  const checkIfLetter = (letter) =>
    letter === ',' ? '' : letter === '.' ? '' : letter

  const checkIfPunctuation = (letter) =>
    letter === ',' ? letter : letter === '.' ? letter : null

  const onlyLetter = checkIfLetter(letter)
  const onlyPunctuation = checkIfPunctuation(letter)

  return (
    <Wrapper onClick={onClick} color={color}>
      {onlyLetter.toUpperCase()}
      {onlyPunctuation && (
        <InnerWrapper punctuation={onlyPunctuation}>
          {onlyPunctuation}
        </InnerWrapper>
      )}
    </Wrapper>
  )
}
Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
}
