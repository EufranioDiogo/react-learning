import React, { useState } from 'react'

const associateCounter = (WrappedComponent) => {
  const AssociateCounter = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
      setCounter(counter + 1);
    }

    const decrementCounter = () => {
      setCounter(counter - 1);
    }

    return <WrappedComponent {...props} counter={counter} incrementCounter={incrementCounter} decrementCounter={decrementCounter}></WrappedComponent>
  }

  return AssociateCounter;
}

export default associateCounter
