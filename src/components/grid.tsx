import React from 'react'
import styled from '@emotion/styled'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
  margin: 0 16px;
`

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => {
  return <Grid>{children}</Grid>
}
