import React, { Component } from "react";

class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    console.log(this.interval);
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  stopTimer() {
    console.log(this.interval);
    clearInterval(this.interval);
    console.log(this.interval);
  }
  render() {
    return (
      <div>
        Timer: {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>Stop Timer</button>
      </div>
    );
  }
}

export default ClassTimer;
