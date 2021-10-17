import React, { useState } from 'react'
import PortalDemo from './PortalDemo'
function MainElement() {
  const [animationState, setAnimatioState] = useState(false);

  const changeAnimationState = () => {
    setAnimatioState(!animationState);
  }

  return (
    <div>
      <PortalDemo message="Bem Vindo" timer={1000} startAnimation={animationState} changeAnimationState={changeAnimationState}></PortalDemo>
      <button onClick={changeAnimationState}>Show</button>
    </div>
  )
}

export default MainElement
