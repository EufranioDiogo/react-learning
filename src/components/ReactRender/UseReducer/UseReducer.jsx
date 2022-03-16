import React, { useReducer } from "react";

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "increment":
      return { value: state.value + action.value };
    case "decrement":
      return { value: state.value - action.value };
    default:
      return initialState;
  }
};

export const UseReducer = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  console.log('UseReducer Rendered')
  return (
    <div>
      <h1>Value: {counter.value}</h1>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            dispatch({ type: "zero", value: 1 });
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 1 });
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 2 });
          }}
        >
          +2
        </button>
      </div>
    </div>
  );
};
