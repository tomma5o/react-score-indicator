import React, { Component } from 'react';

import ReactScoreIndicator from 'react-score-indicator';

export default class App extends Component {
  state = {
    value: 50,
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      value,
    });
  };

  render () {
    const { value } = this.state;

    return (
      <div>
        <div className="title">
          <h1>REACT SCORE INDICATOR</h1>
        </div>
        <ReactScoreIndicator value={value} maxValue={100} lineWidth={15} width={300} />
        <div className="actions">
          <p>Try it! It's free!</p>
          <input type="number" value={value} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
