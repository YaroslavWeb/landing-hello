import * as S from './styles'

import { Button } from 'components/Button'
import * as C from 'styles/components'

export const About = () => {
  return (
    <S.SectionWrapper>
      <C.H3>Award-winning logistics services.Powered by technology, delivered by experts.</C.H3>
      <C.Divider height={30} />
      <C.Description fontSize={20}>
        Businesses are leaving money on the table every day due to missed supply chain
        opportunities. Zencargo unlocks your potential with digital freight forwarding that drives
        cost savings and revenue improvements for your business.
      </C.Description>
      <C.Divider height={50} />
      <Button width={245} mod={Button.mod.ghost}>
        See How Spellon Work
      </Button>
      <C.Divider height={150} />
    </S.SectionWrapper>
  )
}
