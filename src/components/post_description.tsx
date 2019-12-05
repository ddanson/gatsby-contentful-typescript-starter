import React from 'react'
import styled from '@emotion/styled'

import { baseSpacing, colors, fonts } from '../styles/vars'

type Props = {
  description: string
}

const PostDescription = styled.div`
  grid-column: 1 / -1;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: ${baseSpacing * 2}px 0 ${baseSpacing * 4}px 0;
  font-size: ${16 / fonts.base}rem;
  margin-bottom: ${baseSpacing}px;
`

export default ({ description }: Props) => {
  return (
    <PostDescription>{description}</PostDescription>
  )
}
