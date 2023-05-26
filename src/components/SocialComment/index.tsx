import * as S from './styles'

import MediaTwitter from 'assets/icons/socials/twitter.svg'
import mediaVerified from 'assets/images/comments/verified.png'
import * as C from 'styles/components'

export interface I_SocialCommentProps {
  avatar: string
  name: string
  username: string
  verified: boolean
  comment: string
}

export const SocialComment = ({
  avatar,
  comment,
  name,
  username,
  verified,
}: I_SocialCommentProps) => {
  return (
    <S.SocialCommentWrapper>
      <S.AuthorWrapper>
        <S.AuthorAvatar alt='avatar' src={avatar} />
        <div>
          <S.AuthorNameWrapper>
            <S.AuthorName>{name}</S.AuthorName>
            {verified && <S.AuthorVerified alt='verified' src={mediaVerified} />}
          </S.AuthorNameWrapper>
          <S.AuthorUsername>{username}</S.AuthorUsername>
        </div>
      </S.AuthorWrapper>
      <S.SocialIcon>
        <MediaTwitter />
      </S.SocialIcon>
      <C.Divider height={15} />
      <S.CommentText dangerouslySetInnerHTML={{ __html: comment }} />
    </S.SocialCommentWrapper>
  )
}
