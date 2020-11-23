import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : null)};
  color: ${({ answerStatus }) => {
    if (answerStatus === 'unanswered') {
      return '#333'
    } else if (answerStatus === 'correct') {
      return '#6b6'
    } else if (answerStatus === 'wrong') {
      return '#b33'
    } else if (answerStatus === 'clear') {
      return '#696'
    }
  }};
`
