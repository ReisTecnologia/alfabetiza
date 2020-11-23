import styled from 'styled-components'

export const InnerWrapper = styled.div`
  color: ${({ word }) => {
    if (word.endsWith(',')) {
      return '#333'
    } else if (word.endsWith('.')) {
      return '#333'
    }
  }};
  display: inline-block;
`
