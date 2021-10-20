import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(0)

  const searchAllPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        setPosts(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const searchIndividualPost = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then((data) => {
        setPosts([data.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (postId === 0) {
      searchAllPosts()
    } else {
      searchIndividualPost()
    }
  }, [])

  return (
    <div>
      <div className="search-box">
        <input type="text" name="" id="" value={postId === 0 ? '' : postId} onChange={(e) => {
          if (e.target.value.length !== 0) {

            try {
              const possiblePostIdToSearch = Number(e.target.value);

              setPostId(possiblePostIdToSearch)
            } catch (error) {

            }
          } else {
            setPostId(0)
            searchAllPosts()
          }
        }} />

        <button className="search-button" onClick={() => {
          if (postId === 0) {
            searchAllPosts()
          } else {
            searchIndividualPost()
          }
        }}>
          Search
        </button>
      </div>
      <h1>Posts</h1>
      <ul className="post-list" style={{ listStyle: 'none' }}>
        {
          posts.map((post) => {
            return (
              <li>
                <h2 className="post-title">{post.title}</h2>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default DataFetching
