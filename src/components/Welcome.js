import React, { Component } from 'react';

class Welcome extends Component {
  render () {
    return (
      <h1>
        Hello {this.props.name} and he/she favorite hero is {this.props.heroName}
      </h1>
    )
  }
}

export default Welcome;