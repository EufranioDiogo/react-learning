import React, { useState } from 'react'

function ClickCounterTwo() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <h2 onMouseOver={increment}>Hovered {count} times</h2>
  )
}

export default ClickCounterTwo
