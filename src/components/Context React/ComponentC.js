import React from 'react'
import ComponentE from './ComponentE'
import { UserProvider } from './UserContext'

function ComponentC() {
  return (
    <UserProvider value="Eufránio Diogo">
      <div>
        <ComponentE></ComponentE>
      </div>
    </UserProvider>

  )
}

export default ComponentC
