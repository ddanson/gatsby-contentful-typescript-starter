import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { colors, fonts } from '../styles/vars'

const AuthorImage = styled.img`
  border-radius: 50%;
  margin-right: 16px;
  width: 32px;
  height: 32px;
`

const PostMeta = styled.div`
  grid-column: 1 / -1;
  display: flex;
`

const AuthorName = styled.div`
  color: ${colors.lightGreen};
  font-size: ${14 / fonts.base}rem;
  padding-right: 8px;
  font-style: italic;

  :after {
    content: '';
    width: 8px;
    height: 14px;
    border-right: 1px solid ${colors.mediumGrey};
    display: inline-block;
    margin-bottom: -3px;
  }
`

const PublishDate = styled.div`
  color: ${colors.mediumGrey};
  font-size: ${14 / fonts.base}rem;
  font-style: italic;
`

type Props = {
  authorName: string,
  publishDate: string,
}

export default ( { authorName, publishDate }: Props) => {
  return (
    <PostMeta>
      <AuthorImage src='https://i.pravatar.cc/32x32' />
      <AuthorName styles={css``}>{authorName}</AuthorName>
      <PublishDate>{publishDate}</PublishDate>
    </PostMeta>
  )
}
