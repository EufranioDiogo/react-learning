import React, { Component } from 'react'

class EventBind extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Hello'
    }
  }
  clickHandler () {
    this.setState({ message: 'Good Bye'})
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click ME Event Bind</button>
      </div>
    )
  }
}

export default EventBind
