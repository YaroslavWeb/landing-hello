import * as S from './styles'

import MediaLeftDecoration from 'assets/icons/decorations/hero/leftSide.svg'
import MediaRightDecoration from 'assets/icons/decorations/hero/rightSide.svg'
import mediaDashboard from 'assets/images/hero.png'
import { Button } from 'components/Button'
import { Carousel } from 'components/Carousel'
import * as C from 'styles/components'

const SLIDES = Array.from(Array(6).keys())

export const Hero = () => {
  return (
    <S.WrapperSection>
      <S.TopSection>
        <C.Container max={980}>
          <C.H1>Grow up your sells with us.</C.H1>
        </C.Container>
        <C.Container max={600}>
          <C.Description>
            Build one project that runs natively on all your term now users devices to turn for that
            you can do.
          </C.Description>
        </C.Container>

        <S.ActionsWrapper>
          <Button width={208}>Try for Free</Button>
          <Button width={251} mod={Button.mod.outline}>
            Discover in Video
          </Button>
        </S.ActionsWrapper>
      </S.TopSection>
      <S.MiddleSection>
        <div>
          <S.Left>
            <MediaLeftDecoration />
          </S.Left>

          <img alt='dashboard' src={mediaDashboard} />
          <S.Right>
            <MediaRightDecoration />
          </S.Right>
        </div>
      </S.MiddleSection>
      <S.BottomSection>
        <C.Description fontSize={16}>
          More than 1.8 million people across 50,000 companies choose Spellon
        </C.Description>
        <Carousel slides={SLIDES} />
      </S.BottomSection>
      <C.Divider height={200} $decorated />
    </S.WrapperSection>
  )
}
