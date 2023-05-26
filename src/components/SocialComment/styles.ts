import styled from 'styled-components'

export const SocialCommentWrapper = styled.div`
  position: relative;

  max-width: 420px;
  height: 370px;
  padding: 20px;

  background-color: #fff;
  border: 1px solid rgb(0 0 0 / 10%);
  border-radius: 10px;
`

export const AuthorWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const AuthorAvatar = styled.img`
  width: 45px;
  height: 45px;
`

export const AuthorNameWrapper = styled.div`
  position: relative;
  width: fit-content;
`

export const AuthorName = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.black};
`

export const AuthorVerified = styled.img`
  position: absolute;
  right: -18px;
`

export const AuthorUsername = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #596068;
`

export const SocialIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const CommentText = styled.div`
  color: ${({ theme }) => theme.palette.black};
`
