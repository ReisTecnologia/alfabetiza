import styled from 'styled-components'

export const InnerWrapper = styled.div`
  font-size: 6vh;
  color: ${({ punctuation }) => {
    if (punctuation === ',') {
      return '#333'
    } else if (punctuation === '.') {
      return '#333'
    }
  }};
  cursor: default;
`