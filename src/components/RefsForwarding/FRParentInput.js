import React from 'react'
import FRInput from './FRInput';


function FRParentInput() {
  const inputRef = React.createRef();

  const handleButtonClick = (e) => {
    inputRef.current.focus();
  }
  return (
    <div>
      <FRInput ref={inputRef}></FRInput>

      <button onClick={handleButtonClick}>Focar</button>
    </div>
  )
}

export default FRParentInput
