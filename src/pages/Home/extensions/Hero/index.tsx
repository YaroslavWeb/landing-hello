import * as S from './styles'

import MediaLeftDecoration from 'assets/icons/decorations/leftSide.svg'
import MediaRightDecoration from 'assets/icons/decorations/rightSide.svg'
import MediaDashboard from 'assets/images/hero.png'
import { Button } from 'components/Button'
import * as C from 'styles/components'

export const Hero = () => {
  return (
    <section>
      <S.TopSection>
        <C.H1>Grow up your sells with us.</C.H1>
        <C.Description>
          Build one project that runs natively on all your term now users devices to turn for that
          you can do.
        </C.Description>
        <S.ActionsWrapper>
          <Button>Try for Free</Button>
          <Button>Discover in Video</Button>
        </S.ActionsWrapper>
      </S.TopSection>
      <div>
        <MediaLeftDecoration />
        <img alt='dashboard' src={MediaDashboard} />
        <MediaRightDecoration />
      </div>
      <div>
        <span>More than 1.8 million people across 50,000 companies choose Spellon</span>

        <div>Slider</div>
      </div>
    </section>
  )
}
