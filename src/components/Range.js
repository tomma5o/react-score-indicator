import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.css';

export default class Score extends React.Component {
  static propTypes = {
    scoreNumber: PropTypes.number.isRequired,
    width: PropTypes.number,
    lineWidth: PropTypes.number,
    lineSpacing: PropTypes.number,
    maxAngle: PropTypes.number,
    rotation: PropTypes.number,
    stepsColors: PropTypes.array.isRequired,
  };

  static defaultProps = {
    width: 200,
    lineWidth: 5,
    lineSpacing: 5,
    maxAngle: 260,
    rotation: 90,
  };

  static hex2rgba(hex, opacity = 1) {
    const newhex = hex.replace('#', '');
    const r = parseInt(newhex.substring(0, 2), 16);
    const g = parseInt(newhex.substring(2, 4), 16);
    const b = parseInt(newhex.substring(4, 6), 16);

    const result = `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
    return result;
  }

  static draw(canvas, ctx, lineWidth, lineSpacing, maxAngle, rotation, scoreNumber, colors) {
    const halfWidth = canvas.width / 2;
    const pieSize = maxAngle / colors.length;
    let lastval = 0;

    ctx.clearRect(halfWidth * -1, halfWidth * -1, canvas.width, canvas.height);
    ctx.resetTransform();

    ctx.translate(canvas.width / 2, canvas.width / 2);
    ctx.rotate(Math.PI * 2 * ((rotation + (360 - maxAngle - lineSpacing) / 2) / 360));

    for (let i = 0; i < colors.length; i++) {
      ctx.beginPath();
      ctx.arc(
        0,
        0,
        halfWidth - lineWidth / 2,
        Math.PI * 2 * ((lastval + lineSpacing) / 360),
        Math.PI * 2 * ((lastval + pieSize) / 360),
      );
      lastval += pieSize;
      if (scoreNumber < i + 1) ctx.strokeStyle = Score.hex2rgba(colors[i], 40);
      else ctx.strokeStyle = colors[i];
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  }

  constructor() {
    super();
    this.canvas = null;
    this.ctx = null;

    this.setCanvasRef = (element) => {
      if (element) {
        this.canvas = element;
        this.ctx = element.getContext('2d');
      }
    };
  }

  componentDidMount() {
    const {
      lineWidth,
      lineSpacing,
      maxAngle,
      rotation,
      scoreNumber,
      stepsColors,
    } = this.props;

    if (this.ctx) {
      Score.draw(
        this.canvas,
        this.ctx,
        lineWidth,
        lineSpacing,
        maxAngle,
        rotation,
        scoreNumber,
        stepsColors,
      );
    }
  }

  render() {
    const {
      width,
      lineWidth,
      lineSpacing,
      maxAngle,
      rotation,
      scoreNumber,
      stepsColors,
    } = this.props;

    if (this.ctx) {
      Score.draw(
        this.canvas,
        this.ctx,
        lineWidth,
        lineSpacing,
        maxAngle,
        rotation,
        scoreNumber,
        stepsColors,
      );
    }

    return <canvas className={styles.rangeSvg} ref={this.setCanvasRef} height={`${width}px`} width={`${width}px`} />;
  }
}
