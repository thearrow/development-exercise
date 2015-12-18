import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <h1>
        {this.props.text}
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <Title text={"Are we out of the woods yet?"}/>
    );
  }
}