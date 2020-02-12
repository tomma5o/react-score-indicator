import React from 'react';
import PropTypes from 'prop-types';

function hex2rgba(hex) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var newhex = hex.replace('#', '');
  var r = parseInt(newhex.substring(0, 2), 16);
  var g = parseInt(newhex.substring(2, 4), 16);
  var b = parseInt(newhex.substring(4, 6), 16);

  var result = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
  return result;
}

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

  function Score() {
    classCallCheck(this, Score);

    var _this = possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this));

    _this.canvas = React.createRef();
    _this.ctx = null;
    _this.devicePixelRatio = null;
    return _this;
  }

  createClass(Score, [{
    key: 'draw',
    value: function draw(ctx) {
      if (!ctx || !this.devicePixelRatio) return;
      var _props = this.props,
          width = _props.width,
          maxAngle = _props.maxAngle,
          rotation = _props.rotation,
          stepsColors = _props.stepsColors,
          lineGap = _props.lineGap,
          lineWidth = _props.lineWidth,
          scoreNumber = _props.scoreNumber,
          fadedOpacity = _props.fadedOpacity;

      // change size canvas when HDPI screen

      var pixelRatio = this.devicePixelRatio;
      var wRatio = width * pixelRatio;
      this.canvas.current.width = wRatio;
      this.canvas.current.height = wRatio;

      var halfWidth = wRatio / 2;
      var pieSize = maxAngle / stepsColors.length;
      var lastval = 0;

      ctx.clearRect(halfWidth * -1, halfWidth * -1, wRatio, wRatio);
      ctx.resetTransform();

      ctx.translate(wRatio / 2, wRatio / 2);
      ctx.rotate(Math.PI * 2 * ((rotation + (360 - maxAngle - lineGap) / 2) / 360));

      for (var i = 0; i < stepsColors.length; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, halfWidth - lineWidth * pixelRatio / 2, Math.PI * 2 * ((lastval + lineGap) / 360), Math.PI * 2 * ((lastval + pieSize) / 360));
        lastval += pieSize;
        if (scoreNumber < i + 1) ctx.strokeStyle = hex2rgba(stepsColors[i], fadedOpacity);else ctx.strokeStyle = stepsColors[i];
        ctx.lineWidth = lineWidth * pixelRatio;
        ctx.stroke();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.devicePixelRatio = window.devicePixelRatio;
      this.ctx = this.canvas.current.getContext('2d');

      this.draw(this.ctx);
    }
  }, {
    key: 'render',
    value: function render() {
      var width = this.props.width;


      this.draw(this.ctx);

      return React.createElement('canvas', {
        className: styles.rangeSvg,
        ref: this.canvas,
        style: { width: width },
        width: width,
        height: width
      });
    }
  }]);
  return Score;
}(React.Component);

Score.propTypes = {
  scoreNumber: PropTypes.number.isRequired,
  width: PropTypes.number,
  lineWidth: PropTypes.number,
  lineGap: PropTypes.number,
  maxAngle: PropTypes.number,
  rotation: PropTypes.number,
  stepsColors: PropTypes.array.isRequired,
  fadedOpacity: PropTypes.number
};
Score.defaultProps = {
  width: 200,
  lineWidth: 5,
  lineGap: 5,
  maxAngle: 260,
  rotation: 90,
  fadedOpacity: 40
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  maxValue: PropTypes.number.isRequired,
  width: PropTypes.number,
  lineWidth: PropTypes.number,
  lineSpacing: PropTypes.number,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  maxAngle: PropTypes.number,
  rotation: PropTypes.number,
  stepsColors: PropTypes.array,
  fadedOpacity: PropTypes.number
};

ReactScoreIndicator.defaultProps = {
  width: 200,
  maxAngle: 260,
  lineWidth: 5,
  lineSpacing: 5,
  rotation: 90,
  stepsColors: DEFAULT_STEP_COLORS,
  style: {},
  textStyle: {},
  fadedOpacity: 40
};

export default ReactScoreIndicator;
//# sourceMappingURL=index.es.js.map
