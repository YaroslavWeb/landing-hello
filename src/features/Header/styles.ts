import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header<{ $isSticky: boolean }>`
  position: fixed;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 112px;

  background-color: ${({ theme }) => theme.palette.white};

  transition: box-shadow 0.2s ease;

  ${({ $isSticky }) =>
    $isSticky &&
    css`
      box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;
    `}

  @media (width <= 1024px) {
    height: 72px;
  }
`

export const Logo = styled.span`
  font-size: 38px;
  font-weight: 500;
`

export const NavigationList = styled.ul`
  display: flex;
  gap: 32px;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.black};

  @media (width <= 1024px) {
    display: none;
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 35px;

  & > button:first-child {
    @media (width <= 1024px) {
      display: none;
    }
  }
`
