import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0
}


const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        firstCounter: currentState.firstCounter + action.value
      };
    case 'decrement':
      return {
        firstCounter: currentState.firstCounter - action.value
      };
    case 'reset':
      return { firstCounter: 0 };
    default:
      return currentState;
  }
}

function Counter() {
  const [counter1, dispatchCounter1] = useReducer(reducer, initialState)
  const [counter2, dispatchCounter2] = useReducer(reducer, initialState)


  return (
    <div>

      <div className="counter-1">
        <h1>Counter 1: {counter1.firstCounter}</h1>
        <button onClick={() => {
          // @ts-ignore
          dispatchCounter1({ type: 'increment', value: 1 })
        }}>Increment</button>

        <button onClick={() => {
          // @ts-ignore
          dispatchCounter1({ type: 'increment', value: 5 })
        }}>Increment 5</button>
        <button onClick={() => {
          // @ts-ignore
          dispatchCounter1({ type: 'decrement', value: 1 })
        }}>Decrement</button>
        <button onClick={() => {
          // @ts-ignore
          dispatchCounter1({ type: 'decrement', value: 5 })
        }}>Decrement 5</button>
        <button onClick={() => {
          // @ts-ignore
          dispatchCounter1({ type: 'reset', value: 1 })
        }}>Reset</button>
      </div>

      <div className="counter-2">
        <h1>Counter 2: {counter2.firstCounter}</h1>
        <button onClick={() => {
          // @ts-ignore
          dispatchCounter2({ type: 'increment', value: 1 })
        }}>Increment</button>

        <button onClick={() => {
          // @ts-ignore
          dispatchCounter2({ type: 'increment', value: 5 })
        }}>Increment 5</button>
        <button onClick={() => {
          // @ts-ignore
          dispatchCounter2({ type: 'decrement', value: 1 })
        }}>Decrement</button>
        <button onClick={() => {
          // @ts-ignore
          dispatchCounter2({ type: 'decrement', value: 5 })
        }}>Decrement 5</button>
        <button onClick={() => {
          // @ts-ignore
          dispatchCounter2({ type: 'reset', value: 1 })
        }}>Reset</button>
      </div>

    </div>
  )
}

export default Counter
