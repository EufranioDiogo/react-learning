import React, { useEffect, useState } from "react";

function useCounter(initialCounterValue = 0, value = 1) {
  const [counter, setCounter] = useState(initialCounterValue);

  const handleIncrementClick = () => {
    setCounter(counter + value);
  };
  const handleDecrementClick = () => {
    setCounter(counter + value);
  };
  const handleResetClick = () => {
    setCounter(initialCounterValue);
  };

  return [
    counter,
    handleIncrementClick,
    handleDecrementClick,
    handleResetClick,
  ];
}

export default useCounter;
