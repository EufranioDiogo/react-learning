import React, { useState } from 'react'
import withCounter from './withCounter';

function ClickCounter({name, increment, counter, age}) {
  return (
    <div>
      <button onClick={increment}> {name} Button Clicked {counter}  times, My age: {age} </button>
    </div>
  )
}

export default withCounter(ClickCounter)
