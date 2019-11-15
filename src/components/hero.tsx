import React from 'react'
import Img from 'gatsby-image'

type Props = {
  fluid: any
}

export default ({ fluid }: Props) => {
  return (
    <div>
      <Img fluid={fluid} />
    </div>
  )
}
