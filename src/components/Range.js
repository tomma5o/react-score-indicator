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
    fadedOpacity: PropTypes.number,
  };

  static defaultProps = {
    width: 200,
    lineWidth: 5,
    lineGap: 5,
    maxAngle: 260,
    rotation: 90,
    fadedOpacity: 40,
  };

  constructor() {
    super();
    this.canvas = React.createRef();
    this.ctx = null;
    this.devicePixelRatio = null;
  }

  draw(ctx) {
    if (!ctx || !this.devicePixelRatio) return;
    const {
      width,
      maxAngle,
      rotation,
      stepsColors,
      lineGap,
      lineWidth,
      scoreNumber,
      fadedOpacity,
    } = this.props;

    // change size canvas when HDPI screen
    const pixelRatio = this.devicePixelRatio;
    const wRatio = width * pixelRatio;
    this.canvas.current.width = wRatio;
    this.canvas.current.height = wRatio;

    const halfWidth = wRatio / 2;
    const pieSize = maxAngle / stepsColors.length;
    let lastval = 0;

    ctx.clearRect(halfWidth * -1, halfWidth * -1, wRatio, wRatio);
    ctx.resetTransform();

    ctx.translate(wRatio / 2, wRatio / 2);
    ctx.rotate(Math.PI * 2 * ((rotation + (360 - maxAngle - lineGap) / 2) / 360));

    for (let i = 0; i < stepsColors.length; i++) {
      ctx.beginPath();
      ctx.arc(
        0,
        0,
        halfWidth - lineWidth * pixelRatio / 2,
        Math.PI * 2 * ((lastval + lineGap) / 360),
        Math.PI * 2 * ((lastval + pieSize) / 360),
      );
      lastval += pieSize;
      if (scoreNumber < i + 1) ctx.strokeStyle = hex2rgba(stepsColors[i], fadedOpacity);
      else ctx.strokeStyle = stepsColors[i];
      ctx.lineWidth = lineWidth * pixelRatio;
      ctx.stroke();
    }
  }

  componentDidMount() {
    this.devicePixelRatio = window.devicePixelRatio;
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
        style={{ width }}
        width={width}
        height={width}
      />
    );
  }
}
