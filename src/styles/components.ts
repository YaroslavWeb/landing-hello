import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 96px;
  font-weight: 900;
  color: ${({ theme }) => theme.palette.black};
  text-align: center;
`

export const Description = styled.div<{ fontSize?: number }>`
  font-size: ${({ fontSize = 22 }) => fontSize}px;
  line-height: 150%;
  color: ${({ theme }) => theme.palette.lightGray};
  text-align: center;
`
