import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 0
}


const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment1':
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value
      };
    case 'decrement1':
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value
      };
    case 'reset1':
      return { ...currentState, firstCounter: 0 };
    case 'increment2':
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value
      };
    case 'decrement2':
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value
      };
    case 'reset2':
      return { ...currentState, secondCounter: 0 };
    default:
      return currentState;
  }
}

function Counter() {
  const [counter, dispatch] = useReducer(reducer, initialState)

  return (
    <div>

      <div className="counter-1">
        <h1>Counter: {counter.firstCounter}</h1>
        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'increment1', value: 1 })
        }}>Increment</button>

        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'increment1', value: 5 })
        }}>Increment 5</button>
        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'decrement1', value: 1 })
        }}>Decrement</button>
        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'decrement1', value: 5 })
        }}>Decrement 5</button>
        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'reset1', value: 1 })
        }}>Reset</button>
      </div>

      <div className="counter-2">
        <h1>Counter: {counter.secondCounter}</h1>
        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'increment2', value: 1 })
        }}>Increment</button>

        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'increment2', value: 5 })
        }}>Increment 5</button>
        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'decrement2', value: 1 })
        }}>Decrement</button>
        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'decrement2', value: 5 })
        }}>Decrement 5</button>
        <button onClick={() => {
          // @ts-ignore
          dispatch({ type: 'reset2', value: 1 })
        }}>Reset</button>
      </div>

    </div>
  )
}

export default Counter
