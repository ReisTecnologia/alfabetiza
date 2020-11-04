import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 380px;
  line-height: 0.8;
  text-align: center;
`
// border-top: solid 1px #eee;
// border-bottom: solid 1px #eee;

export const LetraGrande = ({ children }) => {
  return <Wrapper>A</Wrapper>
}

LetraGrande.propTypes = {
  children: PropTypes.string,
}
