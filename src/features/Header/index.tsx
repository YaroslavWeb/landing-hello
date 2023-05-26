import { useCallback, useEffect, useState } from 'react'

import * as S from './styles'

import { Button } from 'components/Button'

export const Header = () => {
  const [isSticky, setSticky] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
  return (
    <S.HeaderWrapper $isSticky={isSticky}>
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
        <Button size={Button.size.small} width={54} mod={Button.mod.secondary}>
          Sign in
        </Button>
        <Button size={Button.size.small} width={180}>
          Try for Free
        </Button>
      </S.ActionsWrapper>
    </S.HeaderWrapper>
  )
}
