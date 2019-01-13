import React, { Component } from 'react';

import ReactScoreIndicator from 'react-score-indicator';

export default class App extends Component {
  state = {
    value: 0,
  };

  add = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  sub = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render () {
    return (
      <div>
        <ReactScoreIndicator value={this.state.value} maxValue={100} width={200} />
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
      </div>
    )
  }
}
