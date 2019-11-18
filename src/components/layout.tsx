import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Header from './header'

import { baseSpacing, colors, fonts } from '../styles/vars'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Work+Sans:600,700&display=swap" rel="stylesheet" />
        </Helmet>
        <Global
          styles={css`
            body {
              font-family: ${fonts.primaryFamily};
              font-weight: regular;
              font-size: ${18 / fonts.base}rem;
              line-height: ${28 / fonts.base}rem;
            }
            h1 {
              font-family: ${fonts.headingFamily};
              font-weight: bold;
              font-size: ${36 / fonts.base}rem;
              letter-spacing: 0.5px;
              line-height: ${42 / fonts.base}rem;
              margin: 0 0 ${baseSpacing * 2}px 0;
            }
            h2 {
              font-family: ${fonts.headingFamily};
              font-weight: semi bold;
              font-size: ${27 / fonts.base}rem;
              letter-spacing: 0.25px;
              line-height: ${32 / fonts.base}rem;
            }
          `}
        />
        <Header />
        {children}
      </>
    )}
  />
)

export default Layout
