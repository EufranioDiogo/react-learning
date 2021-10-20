import React from 'react'

// function FRInput() {
//   return (
//     <div>
//       <input type="text" name="fr-input" id="fr-input   " />
//     </div>
//   )
// }

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" name="fr-input" id="fr-input" ref={ref} />
    </div>
  )
}) 

export default FRInput
