import React from 'react'


const FRInput = React.forwardRef((props, refs) => {
  return (
    <div>
      <input type="text" placeholder="Digite um texto" ref={refs}></input>
    </div>
  )
})

export default FRInput
