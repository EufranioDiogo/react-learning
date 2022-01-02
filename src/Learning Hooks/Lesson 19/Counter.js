import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};

function Counter() {
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>
        <h1>{value}</h1>
      </p>

      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        0
      </button>
    </div>
  );
}

export default Counter;
