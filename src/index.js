import React from 'react';
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

export default function ReactScoreIndicator(props) {
  const { width, style } = props;

  return (
    <div className={styles.wrapper} style={{ width: `${width}px`, ...style }}>
      <Score {...props} />
    </div>
  );
}

ReactScoreIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  lineWidth: PropTypes.number,
  lineSpacing: PropTypes.number,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  maxAngle: PropTypes.number,
  rotation: PropTypes.number,
  stepsColors: PropTypes.array,
};

ReactScoreIndicator.defaultProps = {
  maxAngle: 260,
  lineWidth: 5,
  lineSpacing: 5,
  rotation: 90,
  stepsColors: DEFAULT_STEP_COLORS,
  style: {},
  textStyle: {},
};
