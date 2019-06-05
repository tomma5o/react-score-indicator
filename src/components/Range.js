import React from 'react';
import PropTypes from 'prop-types';

import hex2rgba from '../utils/hex2rgba';
import styles from '../styles.css';

export default class Score extends React.Component {
  static propTypes = {
    scoreNumber: PropTypes.number.isRequired,
    width: PropTypes.number,
    lineWidth: PropTypes.number,
    lineGap: PropTypes.number,
    maxAngle: PropTypes.number,
    rotation: PropTypes.number,
    stepsColors: PropTypes.array.isRequired,
  };

  static defaultProps = {
    width: 200,
    lineWidth: 5,
    lineGap: 5,
    maxAngle: 260,
    rotation: 90,
  };

  constructor() {
    super();
    this.canvas = React.createRef();
    this.ctx = null;
  }

  draw(ctx) {
    if (!ctx) return;
    const {
      width,
      maxAngle,
      rotation,
      stepsColors,
      lineGap,
      lineWidth,
      scoreNumber,
    } = this.props;

    const halfWidth = width / 2;
    const pieSize = maxAngle / stepsColors.length;
    let lastval = 0;

    ctx.clearRect(halfWidth * -1, halfWidth * -1, width, width);
    ctx.resetTransform();

    ctx.translate(width / 2, width / 2);
    ctx.rotate(Math.PI * 2 * ((rotation + (360 - maxAngle - lineGap) / 2) / 360));

    for (let i = 0; i < stepsColors.length; i++) {
      ctx.beginPath();
      ctx.arc(
        0,
        0,
        halfWidth - lineWidth / 2,
        Math.PI * 2 * ((lastval + lineGap) / 360),
        Math.PI * 2 * ((lastval + pieSize) / 360),
      );
      lastval += pieSize;
      if (scoreNumber < i + 1) ctx.strokeStyle = hex2rgba(stepsColors[i], 40);
      else ctx.strokeStyle = stepsColors[i];
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  }

  componentDidMount() {
    this.ctx = this.canvas.current.getContext('2d');
    this.draw(this.ctx);
  }

  render() {
    const { width } = this.props;
    this.draw(this.ctx);
    return (
      <canvas
        className={styles.rangeSvg}
        ref={this.canvas}
        width={width}
        height={width}
      />
    );
  }
}
