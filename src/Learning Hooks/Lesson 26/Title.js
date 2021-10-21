import React from 'react'

function Title() {
  console.log('Title')
  return (
    <div>
      UseCallback hooks
    </div>
  )
}

export default React.memo(Title)
