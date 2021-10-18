import React, { useState, useEffect } from 'react'

function TitleModifier() {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState('');

  const increment = () => {
    setCounter(count + 1);
  }

  const changeName = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count])

  return (
    <div>
      <input type="text" name="" id="" value={name} onChange={changeName} />
      <button onClick={increment}>Click { count } times </button>
    </div>
  )
}

export default TitleModifier
