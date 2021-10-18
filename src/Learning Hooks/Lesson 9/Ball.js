import React from 'react'

function Ball({x, y}) {
  return (
    <div className="ball" style={{
      top: y - 16,
      left: x - 16
    }}>

    </div>
  )
}

export default Ball
