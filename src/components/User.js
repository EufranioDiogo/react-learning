import React from 'react'

function User({render}) {
  return (
    <div>
      {render(true)}
    </div>
  )
}

export default User
