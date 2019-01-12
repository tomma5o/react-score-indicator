import React, { Component } from 'react'

import ReactScoreIndicator from 'react-score-indicator'

export default class App extends Component {
  state = {
    value: 0,
  };

  add = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render () {
    return (
      <div>
        <ReactScoreIndicator value={this.state.value} maxValue={100} />
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}
