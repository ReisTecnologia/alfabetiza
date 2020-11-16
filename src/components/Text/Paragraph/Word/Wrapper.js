import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-right: 5px;
  margin-left: ${({ marginLeft }) => marginLeft || null};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : null)};
  color: ${({ answerStatus }) => {
    if (answerStatus === 'unanswered') {
      return '#333'
    } else if (answerStatus === 'correct') {
      return '#3b3'
    } else if (answerStatus === 'wrong') {
      return '#b33'
    } else if (answerStatus === 'clear') {
      return '#3f3'
    }
  }};
`
