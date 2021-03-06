import React from 'react'

import { useSelector } from 'react-redux'

export const SinglePost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return <p>Post Not Found!</p>
  }

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.content}</p>
    </div>
  )
}
