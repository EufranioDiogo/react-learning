import React, { useState } from 'react'


const withCounter = (WrappedComponent) => {
  const WithCounter = (props) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
      setCounter(counter + 1);
    }

    return <WrappedComponent counter={counter} {...props} increment={increment}></WrappedComponent>
  }

  return WithCounter;
}

export default withCounter