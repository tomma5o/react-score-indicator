import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// components
import Score from './components/Score';

import styles from './styles.css'

export default class ReactScoreIndicator extends Component {
  state = {
    value: 0
  };

  add = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Range Indicator</h1>
        <div className={styles.box}>
          <Score value={this.state.value} maxValue={100} label="score" />
        </div>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}
