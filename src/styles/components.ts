import styled, { css } from 'styled-components'

interface I_TypographyProps {
  align?: 'start' | 'center' | 'end'
}

export const H1 = styled.h1<I_TypographyProps>`
  font-size: 96px;
  font-weight: 900;
  color: ${({ theme }) => theme.palette.black};
  text-align: ${({ align = 'center' }) => align};

  @media (width <= 1024px) {
    font-size: 48px;
  }
`

export const H2 = styled.h2<I_TypographyProps>`
  font-size: 72px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.black};
  text-align: ${({ align = 'center' }) => align};

  @media (width <= 1024px) {
    font-size: 36px;
  }
`

export const H3 = styled.h3<I_TypographyProps>`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.black};
  text-align: ${({ align = 'center' }) => align};

  @media (width <= 1024px) {
    font-size: 28px;
  }
`

export const Description = styled.div<{ fontSize?: number } & I_TypographyProps>`
  font-size: ${({ fontSize = 22 }) => fontSize}px;
  line-height: 150%;
  color: ${({ theme }) => theme.palette.lightGray};
  text-align: ${({ align = 'center' }) => align};

  @media (width <= 1024px) {
    font-size: ${({ fontSize = 22 }) => fontSize / 1.25}px;
  }
`

export const Container = styled.div<{ max: number }>`
  max-width: ${({ max }) => max}px;
`

export const Divider = styled.div<{ height?: number; $decorated?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ height = 30 }) => height}px;

  @media (width <= 1024px) {
    height: ${({ height = 30 }) => height / 2}px;
  }

  ${({ $decorated }) =>
    $decorated &&
    css`
      &::before {
        content: '';

        position: absolute;
        top: 50%;

        width: 100%;
        height: 1px;

        background-color: rgb(0 0 0 / 10%);
      }
    `}
`
