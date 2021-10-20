import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler() {
    alert('Click me clicked');
  }

  render() {
    return (
      <div>
      <button onClick={() => {
        this.clickHandler()
      }}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
