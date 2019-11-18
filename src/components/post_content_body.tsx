import React from 'react'
import styled from '@emotion/styled'

type Props = {
  dangerouslySetInnerHTML: any
}

const PostContentBody = styled.div`
  grid-column: 1 / -1;
`

export default ({ dangerouslySetInnerHTML }: Props) => {
  return (
    <PostContentBody dangerouslySetInnerHTML={dangerouslySetInnerHTML}/>
  )
}
