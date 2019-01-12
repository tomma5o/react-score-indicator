'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

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

var css = "/* add css styles here (optional) */\n\n.styles_wrapper__3KXDn {\n  display: block;\n  font-family: sans-serif;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.styles_scoreWrapper__2ELf- {\n  width: 100%;\n}\n\n.styles_rangeSvg__1TDxQ .styles_pathEl__j7uKd {\n    opacity: 0.3;\n}\n\n.styles_rangeSvg__1TDxQ .styles_pathEl--active__1aVpT {\n  opacity: 1;\n}\n";
var styles = { "wrapper": "styles_wrapper__3KXDn", "scoreWrapper": "styles_scoreWrapper__2ELf-", "rangeSvg": "styles_rangeSvg__1TDxQ", "pathEl": "styles_pathEl__j7uKd", "pathEl--active": "styles_pathEl--active__1aVpT" };
styleInject(css);

function SvgComp(props) {
  var highlited = props.highlited;

  return React__default.createElement(
    'svg',
    {
      className: styles.rangeSvg,
      id: 'score_graph',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '13 10 475 390'
    },
    React__default.createElement('path', {
      className: styles.pathEl + ' step_1 ' + (highlited >= 1 && styles["pathEl--active"]),
      fill: '#FF2D2D',
      d: 'M67.16,397.93A236,236,0,0,1,16,285.4l28.07-4.52a207.5,207.5,0,0,0,45,98.94Z'
    }),
    React__default.createElement('path', {
      className: styles.pathEl + ' step_2 ' + (highlited >= 2 && styles["pathEl--active"]),
      fill: '#FF9B55',
      d: 'M14.62,275.41A237.85,237.85,0,0,1,13,247.62a235.34,235.34,0,0,1,19.59-94.48l26.07,11.35a207.08,207.08,0,0,0-17.22,83.13,211.93,211.93,0,0,0,1.42,24.48Z'
    }),
    React__default.createElement('path', {
      className: styles.pathEl + ' step_3 ' + (highlited >= 3 && styles["pathEl--active"]),
      fill: '#FFD555',
      d: 'M62.38,156.42,36.81,144A238,238,0,0,1,118,50.78l15.86,23.61A209.57,209.57,0,0,0,62.38,156.42Z'
    }),
    React__default.createElement('path', {
      className: styles.pathEl + ' step_4 ' + (highlited >= 4 && styles["pathEl--active"]),
      fill: '#E0EC55',
      d: 'M141.29,69.6,126.44,45.34A236.72,236.72,0,0,1,245.06,10.67l.58,28.44A208.19,208.19,0,0,0,141.29,69.6Z'
    }),
    React__default.createElement('path', {
      className: styles.pathEl + ' step_5 ' + (highlited >= 5 && styles["pathEl--active"]),
      fill: '#CDEC55',
      d: 'M358.86,69.69A208.25,208.25,0,0,0,254.53,39.11l.6-28.43a236.62,236.62,0,0,1,118.6,34.77Z'
    }),
    React__default.createElement('path', {
      className: styles.pathEl + ' step_6 ' + (highlited >= 6 && styles["pathEl--active"]),
      fill: '#95EC55',
      d: 'M437.7,156.59A209.46,209.46,0,0,0,366.33,74.5l15.89-23.6a238.18,238.18,0,0,1,81.06,93.26Z'
    }),
    React__default.createElement('path', {
      className: styles.pathEl + ' step_7 ' + (highlited >= 7 && styles["pathEl--active"]),
      fill: '#5AEC55',
      d: 'M485.37,275.58l-28.25-3.32a210.66,210.66,0,0,0,1.44-24.64,207.24,207.24,0,0,0-17.16-83l26.08-11.33A235.4,235.4,0,0,1,487,247.62,241.16,241.16,0,0,1,485.37,275.58Z'
    }),
    React__default.createElement('path', {
      className: styles.pathEl + ' step_8 ' + (highlited >= 8 && styles["pathEl--active"]),
      fill: '#1ED955',
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

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Score.__proto__ || Object.getPrototypeOf(Score)).call.apply(_ref, [this].concat(args))), _this), _this.steps = 8, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Score, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          maxValue = _props.maxValue,
          label = _props.label;

      var stepRange = maxValue / this.steps;
      var numberHighlight = Math.ceil(value / stepRange);

      return React__default.createElement(
        'div',
        { className: styles.scoreWrapper },
        React__default.createElement(SvgComp, { highlited: numberHighlight }),
        React__default.createElement(
          'p',
          null,
          React__default.createElement(
            'span',
            null,
            label,
            ' '
          ),
          React__default.createElement(
            'span',
            null,
            value + ' / ' + maxValue
          )
        )
      );
    }
  }]);
  return Score;
}(React__default.PureComponent);

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
          width = _props.width;


      return React__default.createElement(
        'div',
        { className: styles.wrapper, style: { width: width } },
        React__default.createElement(Score, { value: value, maxValue: maxValue, label: 'score' })
      );
    }
  }]);
  return ReactScoreIndicator;
}(React.Component);

ReactScoreIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  width: PropTypes.string
};
ReactScoreIndicator.defaultProps = {
  value: 0,
  maxValue: 100,
  width: '200px'
};

module.exports = ReactScoreIndicator;
//# sourceMappingURL=index.js.map
