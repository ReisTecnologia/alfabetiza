import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-right: 3px;
  margin-left: ${({ marginLeft }) => marginLeft || null};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : null)};
  color: ${({ answerState }) =>
    answerState === 'unanswered'
      ? '#333'
      : answerState === 'correct'
      ? '#3b3'
      : '#b33'};
`
