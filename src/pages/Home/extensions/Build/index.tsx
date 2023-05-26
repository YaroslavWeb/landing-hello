/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'

import MediaDots from 'assets/icons/decorations/develop/dots.svg'
import MediaGreenEllipse from 'assets/icons/decorations/develop/green_ellipse.svg'
import MediaOrangeEllipse from 'assets/icons/decorations/develop/orange_ellipse.svg'
import mediaBuild from 'assets/images/build.png'
import { Button } from 'components/Button'
import * as C from 'styles/components'

export const Build = () => {
  return (
    <S.SectionWrapper>
      <S.ImageWrapper>
        <img src={mediaBuild} alt='build' />
        <S.Dots>
          <MediaDots />
        </S.Dots>
        <S.GreenEllipse>
          <MediaGreenEllipse />
        </S.GreenEllipse>
        <S.OrangeEllipse>
          <MediaOrangeEllipse />
        </S.OrangeEllipse>
      </S.ImageWrapper>
      <C.Container max={513}>
        <C.H2 align='start'>Build</C.H2>
        <C.Divider height={30} />
        <C.Description align='start'>
          Develop for all your users' devices with just one codebase. Add fast refresh, true native
          capabilities, and your creativity, and you'll have the app your users want in no time.
        </C.Description>
        <C.Divider height={40} />
        <Button mod={Button.mod.text}>Learn more about spellon</Button>
      </C.Container>
      <C.Divider height={150} />
    </S.SectionWrapper>
  )
}
