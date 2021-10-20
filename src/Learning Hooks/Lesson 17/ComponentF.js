import React, { useContext } from 'react'
import { UserContext } from '../../App'

function ComponentF() {
  const user = useContext(UserContext);

  return (
    <div>
      <>
        <h2>User Id: {user.id} </h2>
        <h2>Name: {user.name} </h2>
      </>
    </div>
  )
}

export default ComponentF
