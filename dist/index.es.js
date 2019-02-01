import React, { Component } from 'react';
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

var css = "/* add css styles here (optional) */\r\n\r\n.styles_wrapper__1NlSr {\r\n  display: block;\r\n  font-family: sans-serif;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n\r\n.styles_scoreWrapper__XypvH {\r\n  width: 100%;\r\n}\r\n\r\n.styles_rangeSvg__1Fzbx .styles_pathEl__C7HKm {\r\n    opacity: 0.3;\r\n}\r\n\r\n.styles_rangeSvg__1Fzbx .styles_pathEl--active__2MwUl {\r\n  opacity: 1;\r\n}\r\n\r\n.styles_scoreValue__2-O0E {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  width: 75%;\r\n  max-width: 75%;\r\n  margin: 0 auto;\r\n  text-shadow: 0px 1px 1px #bfbfbf;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.styles_scoreValue__2-O0E .styles_value__LlMOY {}\r\n\r\n.styles_scoreValue__2-O0E .styles_separator__2Slu8 {\r\n  padding: 0 4px;\r\n}\r\n\r\n.styles_scoreValue__2-O0E .styles_maxValue__1HBlu {}\r\n";
var styles = { "wrapper": "styles_wrapper__1NlSr", "scoreWrapper": "styles_scoreWrapper__XypvH", "rangeSvg": "styles_rangeSvg__1Fzbx", "pathEl": "styles_pathEl__C7HKm", "pathEl--active": "styles_pathEl--active__2MwUl", "scoreValue": "styles_scoreValue__2-O0E", "value": "styles_value__LlMOY", "separator": "styles_separator__2Slu8", "maxValue": "styles_maxValue__1HBlu" };
styleInject(css);

function SvgComp(props) {
  var highlighted = props.highlighted,
      stepsColors = props.stepsColors;

  return React.createElement(
    'svg',
    {
      className: styles.rangeSvg,
      id: 'score_graph',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '13 10 475 390'
    },
    React.createElement('path', {
      className: styles.pathEl + ' step_1 ' + (highlighted >= 1 && styles['pathEl--active']),
      fill: stepsColors[0],
      d: 'M67.16,397.93A236,236,0,0,1,16,285.4l28.07-4.52a207.5,207.5,0,0,0,45,98.94Z'
    }),
    React.createElement('path', {
      className: styles.pathEl + ' step_2 ' + (highlighted >= 2 && styles['pathEl--active']),
      fill: stepsColors[1],
      d: 'M14.62,275.41A237.85,237.85,0,0,1,13,247.62a235.34,235.34,0,0,1,19.59-94.48l26.07,11.35a207.08,207.08,0,0,0-17.22,83.13,211.93,211.93,0,0,0,1.42,24.48Z'
    }),
    React.createElement('path', {
      className: styles.pathEl + ' step_3 ' + (highlighted >= 3 && styles['pathEl--active']),
      fill: stepsColors[2],
      d: 'M62.38,156.42,36.81,144A238,238,0,0,1,118,50.78l15.86,23.61A209.57,209.57,0,0,0,62.38,156.42Z'
    }),
    React.createElement('path', {
      className: styles.pathEl + ' step_4 ' + (highlighted >= 4 && styles['pathEl--active']),
      fill: stepsColors[3],
      d: 'M141.29,69.6,126.44,45.34A236.72,236.72,0,0,1,245.06,10.67l.58,28.44A208.19,208.19,0,0,0,141.29,69.6Z'
    }),
    React.createElement('path', {
      className: styles.pathEl + ' step_5 ' + (highlighted >= 5 && styles['pathEl--active']),
      fill: stepsColors[4],
      d: 'M358.86,69.69A208.25,208.25,0,0,0,254.53,39.11l.6-28.43a236.62,236.62,0,0,1,118.6,34.77Z'
    }),
    React.createElement('path', {
      className: styles.pathEl + ' step_6 ' + (highlighted >= 6 && styles['pathEl--active']),
      fill: stepsColors[5],
      d: 'M437.7,156.59A209.46,209.46,0,0,0,366.33,74.5l15.89-23.6a238.18,238.18,0,0,1,81.06,93.26Z'
    }),
    React.createElement('path', {
      className: styles.pathEl + ' step_7 ' + (highlighted >= 7 && styles['pathEl--active']),
      fill: stepsColors[6],
      d: 'M485.37,275.58l-28.25-3.32a210.66,210.66,0,0,0,1.44-24.64,207.24,207.24,0,0,0-17.16-83l26.08-11.33A235.4,235.4,0,0,1,487,247.62,241.16,241.16,0,0,1,485.37,275.58Z'
    }),
    React.createElement('path', {
      className: styles.pathEl + ' step_8 ' + (highlighted >= 8 && styles['pathEl--active']),
      fill: stepsColors[7],
      d: 'M433.27,397.9l-22-18a208.14,208.14,0,0,0,44.61-98.81L484,285.57A236.55,236.55,0,0,1,433.27,397.9Z'
    })
  );
}

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

var Score = function (_React$PureComponent) {
  inherits(Score, _React$PureComponent);

  function Score() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Score);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Score.__proto__ || Object.getPrototypeOf(Score)).call.apply(_ref, [this].concat(args))), _this), _this.steps = 8, _this.getCurrentColor = function (num) {
      var stepsColors = _this.props.stepsColors;


      if (num <= 0) return stepsColors[0];
      if (num > stepsColors.length) return stepsColors[stepsColors.length - 1];

      return stepsColors[num - 1];
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Score, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          maxValue = _props.maxValue,
          wrapperWidth = _props.wrapperWidth,
          stepsColors = _props.stepsColors,
          textStyle = _props.textStyle;

      var stepRange = maxValue / this.steps;
      var numberHighlight = Math.ceil(value / stepRange);

      var valueSize = 36 * wrapperWidth / 200;
      var maxValueSize = 20 * wrapperWidth / 200;
      var scoreValuePosition = 25 * wrapperWidth / 200;

      return React.createElement(
        'div',
        { className: styles.scoreWrapper },
        React.createElement(SvgComp, { highlighted: numberHighlight, stepsColors: stepsColors }),
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
  return Score;
}(React.PureComponent);

Score.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  wrapperWidth: PropTypes.number.isRequired,
  stepsColors: PropTypes.array.isRequired,
  textStyle: PropTypes.object
};
Score.defaultProps = {
  textStyle: {}
};

var DEFAULT_STEP_COLORS = ['#d12000', '#ed8d00', '#f1bc00', '#84c42b', '#53b83a', '#3da940', '#3da940', '#3da940'];

var ReactScoreIndicator = function (_Component) {
  inherits(ReactScoreIndicator, _Component);

  function ReactScoreIndicator() {
    classCallCheck(this, ReactScoreIndicator);
    return possibleConstructorReturn(this, (ReactScoreIndicator.__proto__ || Object.getPrototypeOf(ReactScoreIndicator)).apply(this, arguments));
  }

  createClass(ReactScoreIndicator, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          maxValue = _props.maxValue,
          width = _props.width,
          stepsColors = _props.stepsColors,
          style = _props.style,
          textStyle = _props.textStyle;


      return React.createElement(
        'div',
        { className: styles.wrapper, style: _extends({ width: width + 'px' }, style) },
        React.createElement(Score, {
          value: value,
          maxValue: maxValue,
          wrapperWidth: width,
          stepsColors: stepsColors,
          textStyle: textStyle
        })
      );
    }
  }]);
  return ReactScoreIndicator;
}(Component);

ReactScoreIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  width: PropTypes.number,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  stepsColors: PropTypes.array
};
ReactScoreIndicator.defaultProps = {
  width: 200,
  style: {},
  textStyle: {},
  stepsColors: DEFAULT_STEP_COLORS
};

export default ReactScoreIndicator;
//# sourceMappingURL=index.es.js.map
