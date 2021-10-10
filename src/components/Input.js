import React, { Component } from 'react'

export class Input extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }

  focusInput = () => {
    this.inputRef.current.focus();
  }
  
  render() {
    return (
      <div>
        <input type="text" name="username" id="username" ref={this.inputRef} />
      </div>
    )
  }
}

export default Input
