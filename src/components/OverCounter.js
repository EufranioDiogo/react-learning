import React, { useState } from 'react'
import withCounter from './withCounter';


function OverCounter({name, increment, counter}) {
  return (
    <div>
      <h1 onMouseOver={increment}>Heading Hovered {counter} times</h1>
    </div>
  )
}

export default withCounter(OverCounter)