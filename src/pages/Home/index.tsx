import * as Section from './extensions'
import * as S from './styles'

export const Home = () => {
  return (
    <S.PageWrapper>
      <Section.Hero />
      <Section.About />
      <Section.Develop />
      <Section.Build />
      <Section.Update />
      <Section.Testimonials />
    </S.PageWrapper>
  )
}
