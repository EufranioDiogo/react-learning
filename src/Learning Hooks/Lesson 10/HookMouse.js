import React, { useEffect, useState } from 'react'
import Ball from './Ball';


function HookMouse() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const logMousePosition = (e) => {
    setCoordinate((prevCoordinate) => {
      return { ...prevCoordinate, x: e.clientX, y: e.clientY }
    });

    // Not so good approach cause of synchronism
    //setCoordinate({x: e.clientX, y: e.clientY})
  }


  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      <Ball x={coordinate.x} y={coordinate.y}></Ball>
    </div>
  )
}

export default HookMouse
