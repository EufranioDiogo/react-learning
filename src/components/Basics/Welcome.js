import React, { Component } from 'react';

class Welcome extends Component {
  render () {
    const {name, heroName} = this.props;
    return (
      <h1>
        Hello {name} and he/she favorite hero is {heroName}
      </h1>
    )
  }
}

export default Welcome;