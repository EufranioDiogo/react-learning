import React, { useState } from "react";
import useCounter from "./Hooks/useCounter";
import useDocumentTitle from "./Hooks/useCounter";

function CounterTwo() {
  const [
    counter,
    handleIncrementClick,
    handleDecrementClick,
    handleResetClick,
  ] = useCounter(0, 5);

  return (
    <div>
      <h1>Count - {counter}</h1>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>reset</button>
    </div>
  );
}

export default CounterTwo;
