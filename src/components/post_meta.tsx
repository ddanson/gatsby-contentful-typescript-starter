import React from 'react'
import styled from '@emotion/styled'

const PostMeta = styled.div({
  gridColumn:  '1 / -1',
})

const AuthorName = styled.div({
})

const PublishDate = styled.div({
})

type Props = {
  authorName: string,
  publishDate: string,
}

export default ( { authorName, publishDate }: Props) => {
  return (
    <PostMeta>
      <AuthorName>{authorName}</AuthorName>
      <PublishDate>{publishDate}</PublishDate>
    </PostMeta>
  )
}
