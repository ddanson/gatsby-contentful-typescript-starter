import React from 'react'

import Ad from '../components/ad'
import Content from '../components/content'
import Hero from '../components/hero'
import Layout from '../components/layout'

export default ({ pageContext: { post } }) => {
  return (
    <Layout>
      <Hero fluid={post.heroImage.fluid} />
      <Content>
        <h1>{post.title}</h1>
        <div><p>Author: </p>{post.author.name}</div>
           <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
            />
          <Ad width='300px' height="250px"/>
       </Content>
    </Layout>
  )
}
