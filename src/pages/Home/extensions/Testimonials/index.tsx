import { comments } from './data'
import * as S from './styles'

import { SocialComment } from 'components/SocialComment'

import * as C from 'styles/components'

export const Testimonials = () => {
  return (
    <S.SectionWrapper>
      <S.SectionInner>
        <div>
          <C.Divider height={150} />
          <C.Description fontSize={16}>
            Over 2000 businesses, marketers and creatives use Suparise to grow their Instagram.
          </C.Description>
          <C.Divider height={40} />
          <C.H2>Don’t just take our word for it</C.H2>
        </div>
        <C.Divider height={70} />
        <S.CommentsWrapper>
          {comments.map((comment) => (
            <SocialComment key={comment.name} {...comment} />
          ))}
        </S.CommentsWrapper>
        <C.Divider height={128} />
      </S.SectionInner>
    </S.SectionWrapper>
  )
}
