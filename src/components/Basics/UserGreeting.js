import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render() {

    return (
      <div>
        {
          this.state.isLoggedIn &&
          <h1>Welcome Eufránio</h1>
        }
        {
          !this.state.isLoggedIn &&
          <h1>Welcome Guest</h1>
        }
      </div>
    )

    //return this.state.isLoggedIn ? <h1>Welcome Eufránio</h1> : <h1>Welcome Guest</h1>;

    //let message;
    //if (this.state.isLoggedIn) {
    //  message = <h1>Welcome Eufránio</h1>;
    //} else {
    //  message = <h1>Welcome Eufránio</h1>;
    //}
    //return (
    //  <div>
    //    { message }
    //  </div>
    //)
    //if (this.state.isLoggedIn) {
    //  return <h1>Welcome Eufránio</h1>;
    //}
    //return <h1>Welcome Guest</h1>;

    //return (
    //  <div>
    //    <h1>Welcome Eufránio</h1>
    //    <h1>Welcome Guest</h1>
    //  </div>
    //)
  }
}

export default UserGreeting
