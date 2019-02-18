import React from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n\n.styles_wrapper__3KXDn {\n  display: block;\n  font-family: sans-serif;\n  text-align: center;\n  margin: 0 auto;\n  position: relative;\n}\n\n.styles_scoreWrapper__2ELf- {\n  width: 100%;\n}\n\n.styles_rangeSvg__1TDxQ .styles_pathEl__j7uKd {\n    opacity: 0.3;\n}\n\n.styles_rangeSvg__1TDxQ .styles_pathEl--active__1aVpT {\n  opacity: 1;\n}\n\n.styles_scoreValue__2dBgK {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  max-width: 75%;\n  margin: 0 auto;\n  text-shadow: 0px 1px 1px #bfbfbf;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.styles_scoreValue__2dBgK .styles_value__2Y4_G {}\n\n.styles_scoreValue__2dBgK .styles_separator__1X7r0 {\n  padding: 0 4px;\n}\n\n.styles_scoreValue__2dBgK .styles_maxValue__3RXTR {}\n";
var styles = { "wrapper": "styles_wrapper__3KXDn", "scoreWrapper": "styles_scoreWrapper__2ELf-", "rangeSvg": "styles_rangeSvg__1TDxQ", "pathEl": "styles_pathEl__j7uKd", "pathEl--active": "styles_pathEl--active__1aVpT", "scoreValue": "styles_scoreValue__2dBgK", "value": "styles_value__2Y4_G", "separator": "styles_separator__1X7r0", "maxValue": "styles_maxValue__3RXTR" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Score = function (_React$Component) {
  inherits(Score, _React$Component);
  createClass(Score, null, [{
    key: 'hex2rgba',
    value: function hex2rgba(hex) {
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var newhex = hex.replace('#', '');
      var r = parseInt(newhex.substring(0, 2), 16);
      var g = parseInt(newhex.substring(2, 4), 16);
      var b = parseInt(newhex.substring(4, 6), 16);

      var result = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
      return result;
    }
  }, {
    key: 'draw',
    value: function draw(canvas, ctx, lineWidth, lineSpacing, maxAngle, rotation, scoreNumber, colors) {
      var halfWidth = canvas.width / 2;
      var pieSize = maxAngle / colors.length;
      var lastval = 0;

      ctx.clearRect(halfWidth * -1, halfWidth * -1, canvas.width, canvas.height);
      ctx.resetTransform();

      ctx.translate(canvas.width / 2, canvas.width / 2);
      ctx.rotate(Math.PI * 2 * ((rotation + (360 - maxAngle - lineSpacing) / 2) / 360));

      for (var i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, halfWidth - lineWidth / 2, Math.PI * 2 * ((lastval + lineSpacing) / 360), Math.PI * 2 * ((lastval + pieSize) / 360));
        lastval += pieSize;
        if (scoreNumber < i + 1) ctx.strokeStyle = Score.hex2rgba(colors[i], 40);else ctx.strokeStyle = colors[i];
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
    }
  }]);

  function Score() {
    classCallCheck(this, Score);

    var _this = possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this));

    _this.canvas = null;
    _this.ctx = null;

    _this.setCanvasRef = function (element) {
      _this.canvas = element;
      _this.ctx = element.getContext('2d');
    };
    return _this;
  }

  createClass(Score, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          lineWidth = _props.lineWidth,
          lineSpacing = _props.lineSpacing,
          maxAngle = _props.maxAngle,
          rotation = _props.rotation,
          scoreNumber = _props.scoreNumber,
          stepsColors = _props.stepsColors;


      if (this.ctx) {
        Score.draw(this.canvas, this.ctx, lineWidth, lineSpacing, maxAngle, rotation, scoreNumber, stepsColors);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          width = _props2.width,
          lineWidth = _props2.lineWidth,
          lineSpacing = _props2.lineSpacing,
          maxAngle = _props2.maxAngle,
          rotation = _props2.rotation,
          scoreNumber = _props2.scoreNumber,
          stepsColors = _props2.stepsColors;


      if (this.ctx) {
        Score.draw(this.canvas, this.ctx, lineWidth, lineSpacing, maxAngle, rotation, scoreNumber, stepsColors);
      }

      return React.createElement('canvas', { className: styles.rangeSvg, ref: this.setCanvasRef, height: width + 'px', width: width + 'px' });
    }
  }]);
  return Score;
}(React.Component);

Score.propTypes = {
  scoreNumber: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  lineWidth: PropTypes.number,
  lineSpacing: PropTypes.number,
  maxAngle: PropTypes.number,
  rotation: PropTypes.number,
  stepsColors: PropTypes.array.isRequired
};
Score.defaultProps = {
  lineWidth: 5,
  lineSpacing: 5,
  maxAngle: 260,
  rotation: 90
};

var Score$1 = function (_React$PureComponent) {
  inherits(Score$$1, _React$PureComponent);

  function Score$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Score$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Score$$1.__proto__ || Object.getPrototypeOf(Score$$1)).call.apply(_ref, [this].concat(args))), _this), _this.getCurrentColor = function (num) {
      var stepsColors = _this.props.stepsColors;


      if (num <= 0) return stepsColors[0];
      if (num > stepsColors.length) return stepsColors[stepsColors.length - 1];

      return stepsColors[num - 1];
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Score$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          maxValue = _props.maxValue,
          width = _props.width,
          stepsColors = _props.stepsColors,
          textStyle = _props.textStyle;


      var stepRange = maxValue / stepsColors.length;
      var numberHighlight = Math.ceil(value / stepRange);

      var valueSize = 36 * width / 200;
      var maxValueSize = 20 * width / 200;
      var scoreValuePosition = 25 * width / 200;

      return React.createElement(
        'div',
        { className: styles.scoreWrapper },
        React.createElement(Score, _extends({ scoreNumber: Number(numberHighlight) }, this.props)),
        React.createElement(
          'div',
          {
            className: styles.scoreValue,
            style: _extends({
              bottom: scoreValuePosition,
              color: this.getCurrentColor(numberHighlight)
            }, textStyle)
          },
          React.createElement(
            'span',
            { className: styles.value, style: { fontSize: valueSize } },
            value
          ),
          React.createElement(
            'span',
            { className: styles.separator, style: { fontSize: maxValueSize } },
            '/'
          ),
          React.createElement(
            'span',
            { className: styles.maxValue, style: { fontSize: maxValueSize } },
            maxValue
          )
        )
      );
    }
  }]);
  return Score$$1;
}(React.PureComponent);

Score$1.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  stepsColors: PropTypes.array.isRequired,
  textStyle: PropTypes.object
};
Score$1.defaultProps = {
  textStyle: {}
};

var DEFAULT_STEP_COLORS = ['#d12000', '#ed8d00', '#f1bc00', '#84c42b', '#53b83a', '#3da940', '#3da940', '#3da940'];

function ReactScoreIndicator(props) {
  var width = props.width,
      style = props.style;


  return React.createElement(
    'div',
    { className: styles.wrapper, style: _extends({ width: width + 'px' }, style) },
    React.createElement(Score$1, props)
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
  stepsColors: PropTypes.array
};

ReactScoreIndicator.defaultProps = {
  maxAngle: 260,
  lineWidth: 5,
  lineSpacing: 5,
  rotation: 90,
  stepsColors: DEFAULT_STEP_COLORS,
  style: {},
  textStyle: {}
};

export default ReactScoreIndicator;
//# sourceMappingURL=index.es.js.map
