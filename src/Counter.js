import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="container-inner">
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Add One</button>
        <div className="spacer10" />
        <button onClick={this.decrement}>Subtract One</button>
      </div>
    );
  }
}

export default Counter;
