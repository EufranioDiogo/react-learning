import React, { useState } from 'react'

function CounterThree() {
  const [name, setName] = useState({firstName: '', lastName: ''});

  const textChange = (e) => {
    if (e.target.name === 'firstName') {
      setName({...name, firstName: e.target.value})
    } else {
      setName({...name, lastName: e.target.value})
    }
  }
  return (
    <form>
      <input type="text" name="firstName" id="first-name" value={name.firstName} onChange={textChange}/>
      <input type="text" name="lastName" id="last-name" value={name.lastName} onChange={textChange} />

      <h2>Your first name is: {name.firstName} </h2>
      <h2>Your last name is: {name.lastName} </h2>
    </form>
  )
}

export default CounterThree
