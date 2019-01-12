import React from "react";

import RangeSvg from './range';

import styles from '../styles.css';

export default class Score extends React.PureComponent {
  steps = 8;

  render() {
    const { value, maxValue, label } = this.props;
    const stepRange = maxValue / this.steps;
    const numberHighlight = Math.ceil(value / stepRange);

    return (
      <div className={styles.scoreWrapper}>
        <RangeSvg highlited={numberHighlight} />
        <p>
          <span>{label} </span>
          <span>{`${value} / ${maxValue}`}</span>
        </p>
      </div>
    );
  }
}
