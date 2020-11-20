import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-right: 5px;
  margin-left: ${({ marginLeft }) => marginLeft || null};
  display: flex;
`
