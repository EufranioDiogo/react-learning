import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementFive = () => {
    for (let i = 0; i < 100; i++) {
      setCounter((prevCount) => prevCount + 1);
    }
  }
  return (
    <div>
      <h1>Count: { counter }</h1>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment Count</button>
      <button onClick={incrementFive}>Increment 100</button>
      <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>Decrement Count</button>
      <button onClick={() => setCounter(0)}>Reset Count</button>
    </div>
  )
}

export default Counter
