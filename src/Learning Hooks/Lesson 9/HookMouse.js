import React, { useEffect, useState } from 'react'
import Ball from './Ball';


function HookMouse() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const [generateBallFlag, setGenerateBallFlag] = useState(true);
  const [balls, setBalls] = useState([]);

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
