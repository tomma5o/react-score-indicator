import React, { Component } from 'react';

import ReactScoreIndicator from 'react-score-indicator';

export default class App extends Component {
  state = {
    score: 50,
    lineGap: 5,
    lineWidth: 5,
  };

  onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]:value,
    });
  };

  render () {
    const { score, lineGap, lineWidth } = this.state;

    return (
      <div>
        <div className="title">
          <h1>REACT SCORE INDICATOR</h1>
        </div>
        <ReactScoreIndicator
          className="ciccio"
          value={score}
          lineGap={Number(lineGap)}
          lineWidth={Number(lineWidth)}
          maxValue={100}
          width={300}
        />
        <div className="actions">
          <p>Try it! It's free!</p>
          <div className="wrapper_input">
            <label>Score</label>
            <input type="number" name="score" value={score} onChange={this.onChange} />
          </div>
          <div className="wrapper_input">
            <label>lineGap</label>
            <input type="number" name="lineGap" value={lineGap} onChange={this.onChange} />
          </div>
          <div className="wrapper_input">
            <label>lineWidth</label>
            <input type="number" name="lineWidth" value={lineWidth} onChange={this.onChange} />
          </div>
        </div>
      </div>
    );
  }
}
