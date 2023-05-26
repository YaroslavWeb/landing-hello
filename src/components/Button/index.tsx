import { PropsWithChildren } from 'react'

import * as S from './styles'

import MediaExclamation from 'assets/icons/exclamation.svg'

export enum E_ButtonMod {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  outline = 'outline',
  text = 'text',
  solid = 'solid',
}

export enum E_ButtonSize {
  regular = 'regular',
  small = 'small',
}

interface I_ButtonProps {
  onClick?: () => void
  mod?: E_ButtonMod
  size?: E_ButtonSize
  width?: number
  disabled?: boolean
}

const ButtonComponent = ({
  children,
  onClick,
  mod = E_ButtonMod.primary,
  disabled = false,
  size = E_ButtonSize.regular,
  width = 250,
}: PropsWithChildren<I_ButtonProps>) => (
  <S.Button onClick={onClick} $width={width} $mod={mod} disabled={disabled} $size={size}>
    {mod === E_ButtonMod.ghost && <MediaExclamation />}
    {children}
  </S.Button>
)

ButtonComponent.mod = E_ButtonMod
ButtonComponent.size = E_ButtonSize

export const Button = ButtonComponent
