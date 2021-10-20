import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div className="counter-container">
        <h2 className="counter-valuer"> {this.state.counter} </h2>

        <div className="counter-controler-panel" style={ {display: 'flex'} }>
          <button className="increment-button" onClick={() => {
            this.decrement();
          }}>Decrementar</button>

          <button className="increment-button" onClick={() => {
            this.increment();
          }}>Incrementar</button>
        </div>

      </div>
    )
  }
}

export default Counter;