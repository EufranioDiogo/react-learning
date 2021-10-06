import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Welcome Visitor'
    };
  }


  handleClickMeEvent() {
    this.setState({
      message: 'Thanks to Subscribe'
    });
  }

  render() {
    return (
      <>
        <h1 className="message-element">
          {this.state.message}
        </h1>

        <button onClick={() => {
          this.handleClickMeEvent()
        }}>Subscribe</button>
      </>

    )
  }
}

export default Message;