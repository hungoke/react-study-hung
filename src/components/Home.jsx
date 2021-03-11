import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [post, setPost] = useState([])
  const [photo, setPhoto] = useState([])
  const [isLoadingPosts, setIsLoadingPosts] = useState(true)

  const fetchPosts = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_start=10&_limit=5`)
      .then(response => {
        setPost(response.data)
        setIsLoadingPosts(false)
      })
      .catch(() => {
        setIsLoadingPosts(false)
      })
  }

  const fetchPhoto = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_start=10&_limit=10`)
      .then(response => {
        setPhoto(response.data)
      })
  }

  useEffect(() => {
    fetchPosts()
    fetchPhoto()
  }, [])

  return (
    <>
      <h1>Home</h1>

      <h2>Danh sách bài viết nổi bật</h2>
      {
        isLoadingPosts && <h1>Loading ...</h1>
      }
      {
        post.map(post => (
          <div className="item" key={post.id}>
            <Link to={`/posts/` + post.id}>{post.title}</Link>
          </div>
        ))
      }

      <h2>Danh sách các ảnh</h2>
      {
        photo.map(photo => (
          <div className="item" key={photo.id}>
            <img src={photo.thumbnailUrl} alt='' />
          </div>
        ))
      }
    </>
  )
}

export default Home
