import React from 'react'
import styled from '@emotion/styled'

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridColumnGap: '16px',
  margin: '0 16px',
})

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => {
  return <Grid>{children}</Grid>
}
