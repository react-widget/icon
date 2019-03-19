
"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style/index.scss");

var Icon =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck2.default)(this, Icon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
  }

  (0, _createClass2.default)(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          spin = _this$props.spin,
          className = _this$props.className,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["prefixCls", "type", "spin", "className"]);
      return _react.default.createElement("i", (0, _extends2.default)({}, other, {
        className: (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-").concat(type), className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-spin"), spin))
      }));
    }
  }]);
  return Icon;
}(_react.Component);

exports.default = Icon;
(0, _defineProperty2.default)(Icon, "propTypes", {
  prefixCls: _propTypes.default.string,
  className: _propTypes.default.string,
  type: _propTypes.default.string.isRequired,
  spin: _propTypes.default.bool
});
(0, _defineProperty2.default)(Icon, "defaultProps", {
  prefixCls: 'rw-icon',
  spin: false
});