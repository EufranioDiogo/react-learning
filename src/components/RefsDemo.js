import React, { Component } from 'react'

export class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null;

    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }
  
  componentDidMount() {
    //this.inputRef.current.focus();
    //console.log(this.inputRef)
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  handleInClick = () => {
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" name="username" id="username" ref={this.inputRef}/>
        <input type="password" name="password" id="password" ref={this.setCbRef}/>
        <button onClick={this.handleInClick}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
