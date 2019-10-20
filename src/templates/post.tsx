import React from 'react'

export default ({pageContext: { post }}) => (
  <div>
  <h1>{post.title}</h1>
  <div><p>Author: </p>{post.author.name}</div>
  <section>
    {post.description.description}
  </section>
  </div>
)
