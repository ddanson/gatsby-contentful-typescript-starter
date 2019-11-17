import React from 'react'

import Content from '../components/content'
import Hero from '../components/hero'
import Layout from '../components/layout'
import PostTitle from '../components/post_title'
import PostMeta from '../components/post_meta'

export default ({ pageContext: { post } }) => {
  return (
    <Layout>
      <Hero fluid={post.heroImage.fluid} />
      <Content>
        <PostTitle>{post.title}</PostTitle>
          <PostMeta authorName={post.author.name} publishDate={post.createdAt} />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
          />
       </Content>
    </Layout>
  )
}
