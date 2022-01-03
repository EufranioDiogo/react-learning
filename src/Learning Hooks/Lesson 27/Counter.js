import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(
    (number) => {
      let i = 0;

      while (i < 2000000000) {
        i++;
      }
      return number % 2 === 0;
    },
    [counterOne]
  );

  return (
    <div>
      <button onClick={incrementCounterOne}>
        Count - {counterOne} - {isEven ? "Even" : "Odd"}
      </button>
      <button onClick={incrementCounterTwo}>Count - {counterTwo}</button>
    </div>
  );
}

export default Counter;
