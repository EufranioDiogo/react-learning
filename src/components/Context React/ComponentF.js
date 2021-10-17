import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentF() {
  return (
    <UserConsumer>
      {username => {
        return (
          <div>
            Hello { username }
          </div>
        )
      }
      }
    </UserConsumer>

  )
}

export default ComponentF
