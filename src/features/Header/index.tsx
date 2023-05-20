import * as S from './styles'

import { Button } from 'components/Button'

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Logo>HelloUI</S.Logo>
      <nav>
        <S.NavigationList>
          <li>Docs</li>
          <li>Tools</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Jobs</li>
        </S.NavigationList>
      </nav>
      <S.ActionsWrapper>
        <Button size={Button.size.small} mod={Button.mod.text}>
          Sign in
        </Button>
        <Button size={Button.size.small}>Try for Free</Button>
      </S.ActionsWrapper>
    </S.HeaderWrapper>
  )
}
