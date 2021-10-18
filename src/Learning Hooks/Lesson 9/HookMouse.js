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

  const posGenerator = () => {
    return {
      x: ((Math.random() * screenSize.width) + 1),
      y: ((Math.random() * screenSize.height) + 1)
    }
  }

  const generateBallToCollect = () => {
    if (generateBallFlag && screenSize.width !== 0 && screenSize.height !== 0) {
      const pos = posGenerator();

      console.log(pos)
      setBalls([...balls, <Ball x={pos.x} y={pos.y}></Ball>])
      setGenerateBallFlag(false);
    }
    return null;
  }

  useEffect(() => {
    console.log('useEffect Called')
    window.addEventListener('mousemove', logMousePosition);
    setScreenSize((prev) => {
      return { ...prev, width: window.innerWidth, height: window.innerHeight }
    }
    );

    generateBallToCollect()
  }, [])

  return (
    <div>
      <Ball x={coordinate.x} y={coordinate.y}></Ball>

      {balls.length &&
        balls.map(ball => ball)
      }
    </div>
  )
}

export default HookMouse
