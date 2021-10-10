import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.childRef = React.createRef()
  }
  
  clickHandler = () => {
    this.childRef.current.focusInput();
  }

  render() {
    return (
      <div>
        <Input ref={this.childRef}></Input>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
