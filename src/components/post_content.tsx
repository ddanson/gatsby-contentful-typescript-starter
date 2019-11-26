import React from 'react'
import styled from '@emotion/styled'

import Grid from '../components/grid'

import { baseSpacing, colors } from '../styles/vars'

type Props = {
  children: React.ReactNode
}

const PostContent = styled.div`
  margin-top: -16px;
  padding-top: ${baseSpacing * 6}px; 
  border-radius: 20px 20px 0 0;
  background-color: ${colors.white};
  box-shadow: 0 16px 48px 0 rgba(0,0,0,0.15);
  z-index: 2;

  .gatsby-resp-image-wrapper, .gatsby-resp-image-background-image, .gatsby-resp-image-image {
    border-radius: 8px;
  }
`

export default ({ children }: Props) => {
  return (
    <PostContent>
      <Grid>
        { children }
      </Grid>
    </PostContent>
  )
}
