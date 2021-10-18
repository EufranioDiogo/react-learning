import React from 'react'

function Ball({x, y}) {
  return (
    <div className="ball" style={{
      top: y,
      left: x
    }}>

    </div>
  )
}

export default Ball
