import React from 'react';
import PropTypes from 'prop-types';

import Range from './Range';

import styles from '../styles.css';

export default class Score extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    maxValue: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
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
      value,
      maxValue,
      width,
      stepsColors,
      textStyle,
    } = this.props;

    const stepRange = maxValue / stepsColors.length;
    const numberHighlight = Math.ceil(value / stepRange);

    const valueSize = (36 * width) / 200;
    const maxValueSize = (20 * width) / 200;
    const scoreValuePosition = (25 * width) / 200;

    return (
      <div className={styles.scoreWrapper}>
        <Range scoreNumber={Number(numberHighlight)} {...this.props} />
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
