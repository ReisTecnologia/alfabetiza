import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-right: 5px;
  font-size: 10vh;
  margin-left: ${({ marginLeft }) => marginLeft || null};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : null)};
  color: ${({ answerStatus, color }) => {
    if (answerStatus === 'unanswered') {
      return color
    } else if (answerStatus === 'correct') {
      return '#0c6e0c'
    } else if (answerStatus === 'wrong') {
      return '#b33'
    } else if (answerStatus === 'clear') {
      return '#5ed65e'
    }
  }};
`
