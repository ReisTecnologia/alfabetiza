import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : null)};
  color: ${({ color }) => color};
`
