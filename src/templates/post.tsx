import React from 'react'

import Hero from '../components/hero'
import Layout from '../components/layout'
import PostContent from '../components/post_content'
import PostContentBody from '../components/post_content_body'
import PostTitle from '../components/post_title'
import PostMeta from '../components/post_meta'
import PostDescription from '../components/post_description'
import Share from '../components/share'

export default ({ pageContext: { post } }) => {
  return (
    <Layout>
      <Hero fluid={post.heroImage.fluid} />
      <PostContent>
        <PostTitle>{post.title}</PostTitle>
          <PostMeta authorName={post.author.name} publishDate={post.createdAt} />
          <PostDescription description={post.description.description} />
          <PostContentBody
            dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
          />
          <Share description={post.description.description} heroImg={post.heroImage.file.url} shareSlug={post.slug} />
       </PostContent>
    </Layout>
  )
}
