import React, { useState } from 'react'

function ClickCounterTwo() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <button onClick={increment}>Clicked {count} times</button>
  )
}

export default ClickCounterTwo
