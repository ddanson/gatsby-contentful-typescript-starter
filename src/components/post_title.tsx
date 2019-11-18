import React from 'react'
import styled from '@emotion/styled'

const PostTitle = styled.h1`
  grid-column:  1 / -1;
`

type Props = {
  children: React.ReactNode
}

export default ( { children }: Props) => {
  return (
    <PostTitle>{ children }</PostTitle>
  )
}
