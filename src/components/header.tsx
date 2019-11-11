import React from 'react'
import { Link } from 'gatsby'

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <div>
    <div>
      <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
