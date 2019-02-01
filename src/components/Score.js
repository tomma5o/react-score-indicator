import React from 'react';
import PropTypes from 'prop-types';

import RangeSvg from './Range';

import styles from '../styles.css';

export default class Score extends React.PureComponent {
  steps = 8;

  static propTypes = {
    value: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    wrapperWidth: PropTypes.number.isRequired,
    stepsColors: PropTypes.array.isRequired,
    textStyle: PropTypes.object,
  };

  static defaultProps = {
    textStyle: {},
  };

  getCurrentColor = (num) => {
    const { stepsColors } = this.props;

    if (num <= 0) return stepsColors[0];
    if (num > stepsColors.length) return stepsColors[stepsColors.length - 1];

    return stepsColors[num - 1];
  };

  render() {
    const {
      value, maxValue, wrapperWidth, stepsColors, textStyle,
    } = this.props;
    const stepRange = maxValue / this.steps;
    const numberHighlight = Math.ceil(value / stepRange);

    const valueSize = (36 * wrapperWidth) / 200;
    const maxValueSize = (20 * wrapperWidth) / 200;
    const scoreValuePosition = (25 * wrapperWidth) / 200;

    return (
      <div className={styles.scoreWrapper}>
        <RangeSvg highlighted={numberHighlight} stepsColors={stepsColors} />
        <div
          className={styles.scoreValue}
          style={{
            bottom: scoreValuePosition,
            color: this.getCurrentColor(numberHighlight),
            ...textStyle,
          }}
        >
          <span className={styles.value} style={{ fontSize: valueSize }}>
            {value}
          </span>
          <span className={styles.separator} style={{ fontSize: maxValueSize }}>
            /
          </span>
          <span className={styles.maxValue} style={{ fontSize: maxValueSize }}>
            {maxValue}
          </span>
        </div>
      </div>
    );
  }
}
