import React from 'react'
import associateCounter from './associateCounter'

function Heading({counter, incrementCounter, decrementCounter}) {
  return (
    <div onMouseOver={decrementCounter} onClick={incrementCounter}>
      Heading Clicked = {counter}
    </div>
  )
}

export default associateCounter(Heading);
