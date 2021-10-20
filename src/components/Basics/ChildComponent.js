import React from 'react'

function ChildComponent({greetParent}) {
  return (
    <div>
      <button onClick={() => greetParent('Child 1')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent;