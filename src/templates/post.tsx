import React from 'react'
import Ad from '../components/ad'

export default ({pageContext: { post }}) => (
  <div>
  <h1>{post.title}</h1>
  <div><p>Author: </p>{post.author.name}</div>
     <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
      />
    <Ad width='300px' height="250px"/>
  </div>
)
