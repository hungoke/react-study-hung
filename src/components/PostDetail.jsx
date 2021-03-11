import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  const fetchPost = id => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data)
      })
  }

  useEffect(() => {
    fetchPost(id)
  }, [])

  return (
    <>
      {
        post &&
        <div>
          <h2>Bài viết số {post.id}</h2>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      }
    </>
  )
}

export default PostDetail
