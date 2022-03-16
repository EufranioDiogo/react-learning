import React, { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  console.log("UseState render");
  return (
    <>
      <div>Value = {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
};
