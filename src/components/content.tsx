import React from 'react'
import styled from '@emotion/styled'

import Grid from '../components/grid'

import { baseSpacing, colors } from '../styles/vars'

type Props = {
  children: React.ReactNode
}

const Content = styled.div`
  margin-top: -16px;
  padding-top: ${baseSpacing * 6}px; 
  border-radius: 20px 20px 0 0;
  background-color: ${colors.white};
  box-shadow: 0 16px 48px 0 rgba(0,0,0,0.15);
  z-index: 2;
`

export default ({ children }: Props) => {
  return (
    <Content>
      <Grid>
        { children }
      </Grid>
    </Content>
  )
}
