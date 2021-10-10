import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParenteInput extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }
  
  handleClick = () => {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}></FRInput>
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    )
  }
}

export default FRParenteInput
