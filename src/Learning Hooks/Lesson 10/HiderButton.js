import React, { useState } from "react";
import HookMouse from "./HookMouse";

function HiderButton() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)} style={{ zIndex: 2100 }}>
        {display ? "Hide" : "Show"}
      </button>
      {display && <HookMouse></HookMouse>}
    </div>
  );
}

export default HiderButton;
