import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  post: null,
  loading: true,
  error: ''
}

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'fetch':
      return {
        ...currentState,
        loading: false,
        post: action.post
      }
    case 'error':
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
    default:
      break;
  }
}


function DataFetching() {
  const [dataFetching, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        dispatch({ type: 'fetch', post: response.data })
      })
      .catch((error) => {
        dispatch({ type: 'error', error })
      })
  }, [])

  return (
    <div>
      {
        dataFetching.loading &&
        <h1>loading...</h1>
      }
      {
        dataFetching.error !== '' &&
        <h1>error... {dataFetching.error.message} </h1>
      }
      {
        dataFetching.post !== null &&
        <h1>Title: {dataFetching.post.title}</h1>
      }
    </div>
  )
}

export default DataFetching
