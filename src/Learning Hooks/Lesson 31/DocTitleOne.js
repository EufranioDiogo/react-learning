import React, { useState } from "react";
import useDocumentTitle from "./Hooks/useDocumentTitle";

function DocTitleOne() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  useDocumentTitle(counter);

  return (
    <div>
      <button onClick={handleClick}>Count - {counter}</button>
    </div>
  );
}

export default DocTitleOne;
