import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

type Props = {
  fluid: any
}

const Overlay = styled.div({
  background: 'linear-gradient(180deg, rgba(29,29,29,0.2) 0%, rgba(86,86,86,0.15) 63%, rgba(246,246,246,0) 100%)',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  'z-index': 1,
})

export default ({ fluid }: Props) => {
  return (
    <div style={{position: 'relative'}}>
      <Overlay />
      <Img fluid={fluid} />
    </div>
  )
}
