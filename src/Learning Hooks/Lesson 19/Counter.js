import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1;
    case 'decrement':
      return currentState - 1;
    case 'reset':
      return initialState;
    default:
      return currentState
  }
}

function Counter() {
  const [counter, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        // @ts-ignore
        dispatch('increment')
      }}>Increment</button>
      <button onClick={() => {
        // @ts-ignore
        dispatch('decrement')
      }}>Decrement</button>
      <button onClick={() => {
        // @ts-ignore
        dispatch('reset')
      }}>Reset</button>
    </div>
  )
}

export default Counter
