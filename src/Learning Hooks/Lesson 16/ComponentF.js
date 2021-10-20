import React from 'react'
import { UserContext } from '../../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <>
                <h2>User Id: {user.id} </h2>
                <h2>Name: {user.name} </h2>
              </>

            )
          }
        }
      </UserContext.Consumer>

    </div>
  )
}

export default ComponentF
