import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 10vh;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : null)};
  color: ${({ color }) => color};
`
