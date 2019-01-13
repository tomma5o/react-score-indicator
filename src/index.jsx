import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Score from './components/Score';

import styles from './styles.css';

const DEFAULT_STEP_COLORS = [
  '#d12000',
  '#ed8d00',
  '#f1bc00',
  '#84c42b',
  '#53b83a',
  '#3da940',
  '#3da940',
  '#3da940',
];

export default class ReactScoreIndicator extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    width: PropTypes.number,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    stepsColors: PropTypes.array,
  };

  static defaultProps = {
    width: 200,
    style: {},
    textStyle: {},
    stepsColors: DEFAULT_STEP_COLORS,
  };

  render() {
    const {
      value, maxValue, width, stepsColors, style, textStyle,
    } = this.props;

    return (
      <div className={styles.wrapper} style={{ width: `${width}px`, ...style }}>
        <Score
          value={value}
          maxValue={maxValue}
          wrapperWidth={width}
          stepsColors={stepsColors}
          textStyle={textStyle}
        />
      </div>
    );
  }
}
