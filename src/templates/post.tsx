import React from 'react'

import Ad from '../components/ad'
import Grid from '../components/grid'
import Layout from '../components/layout'

export default ({pageContext: { post }}) => (
  <Layout>
    <Grid>
      <h1>{post.title}</h1>
    </Grid>
    <div><p>Author: </p>{post.author.name}</div>
       <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
        />
      <Ad width='300px' height="250px"/>
  </Layout>
)
