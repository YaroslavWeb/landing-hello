import styled, { css } from 'styled-components'

import { E_ButtonMod, E_ButtonSize } from '.'

import { T_StyledVariants } from 'models/styled'

interface ButtonProps {
  $mod: E_ButtonMod
  $size: E_ButtonSize
  disabled: boolean
  $width: number
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  min-width: ${({ $width }) => $width}px;
  padding: 0 32px;

  font-size: 18px;
  font-weight: 400;
  line-height: 28px;

  background: ${({ theme }) => theme.palette.white};
  border: none;
  border-radius: 30px;

  transition: 0.25s color ease, 0.25s background-color ease;

  ${({ $size }) => sizes[$size]};

  ${({ theme, $mod }) => {
    switch ($mod) {
      case E_ButtonMod.primary:
        return css`
          color: ${theme.palette.white};
          background-color: ${theme.palette.primary};
        `

      case E_ButtonMod.ghost:
        return css`
          color: ${theme.palette.primary};
          background-color: ${theme.palette.primary_10};
        `
      case E_ButtonMod.outline:
        return css`
          color: ${theme.palette.primary};
          background-color: ${theme.palette.white};
          box-shadow: rgb(0 0 0 / 50%) 0 3px 7px -3px, 0 6px 0 0 ${theme.palette.white};
        `

      case E_ButtonMod.text:
        return css`
          padding: 0;
          background: transparent;

          &::before {
            content: '';

            position: absolute;
            bottom: 18px;

            width: 90%;
            height: 2px;

            background-color: ${theme.palette.primary};
          }
        `

      case E_ButtonMod.secondary:
        return css`
          padding: 0;
          background: transparent;
        `

      case E_ButtonMod.solid:
        return css`
          height: 100%;
          color: ${theme.palette.white};
          background-color: ${theme.palette.primary};
          border-radius: 0 10px 10px 0;

          @media (width <= 1024px) {
            border-radius: 0;
          }
        `
    }
  }};

  svg {
    width: 27px;
    height: 27px;
  }
`

const sizes: T_StyledVariants<E_ButtonSize> = {
  regular: css`
    height: 60px;
    font-size: 20px;
  `,
  small: css`
    height: 50px;
    font-size: 18px;
  `,
}
