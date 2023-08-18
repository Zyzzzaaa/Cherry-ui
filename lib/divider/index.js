import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["style", "text"];
import "./style/index.less";
import React from "react";
import classNames from "classnames";
var Divider = function Divider(props) {
  var style = props.style,
    text = props.text,
    restProps = _objectWithoutProperties(props, _excluded);
  var className = classNames('cherry-divider', _defineProperty({}, "cherry-components-".concat(style), style));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className
  }, restProps), text !== undefined && /*#__PURE__*/React.createElement("span", null, text));
};
Divider.defaultProps = {
  style: 'primary'
};
export default Divider;