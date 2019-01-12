import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Score from './components/Score';

import styles from './styles.css'

export default class ReactScoreIndicator extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    width: PropTypes.string,
  };

  static defaultProps = {
    value: 0,
    maxValue: 100,
    width: '200px',
  };

  render() {
    const { value, maxValue, width } = this.props;

    return (
      <div className={styles.wrapper} style={{ width }}>
        <Score value={value} maxValue={maxValue} label="score" />
      </div>
    )
  }
}
