import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    });

    return () => {
      clearInterval(intervalRef.current);
      setTimer(0);
    };
  }, []);

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      Timer: {timer} <button onClick={stopTimer}>Clear Timer</button>
    </div>
  );
}

export default HookTimer;
