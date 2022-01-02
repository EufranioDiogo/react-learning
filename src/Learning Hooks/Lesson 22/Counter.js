import React, { useReducer, useContext } from "react";
import { CounterContext } from "../../App";

function Counter() {
  const counter = useContext(CounterContext);
  const [counter1, dispatchCounter1] = useReducer(
    counter?.reducer,
    counter.initialState
  );
  const [counter2, dispatchCounter2] = useReducer(
    counter?.reducer,
    counter.initialState
  );

  return (
    <div
      style={{
        borderBottom: "1px solid #333",
        marginBottom: 100,
      }}
    >
      <div className="counter-1">
        <h1>Counter 1: {counter1.counter1}</h1>
        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter1({ type: "increment1", value: 1 });
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter1({ type: "increment1", value: 5 });
          }}
        >
          Increment 5
        </button>
        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter1({ type: "decrement1", value: 1 });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter1({ type: "decrement1", value: 5 });
          }}
        >
          Decrement 5
        </button>
        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter1({ type: "reset1", value: 1 });
          }}
        >
          Reset
        </button>
      </div>

      <div className="counter-2">
        <h1>Counter 2: {counter2.counter2}</h1>
        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter2({ type: "increment2", value: 1 });
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter2({ type: "increment2", value: 5 });
          }}
        >
          Increment 5
        </button>
        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter2({ type: "decrement2", value: 1 });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter2({ type: "decrement2", value: 5 });
          }}
        >
          Decrement 5
        </button>
        <button
          onClick={() => {
            // @ts-ignore
            dispatchCounter2({ type: "reset2", value: 1 });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
