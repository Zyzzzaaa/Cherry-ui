import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "size", "style", "prepend", "append"];
import React from "react";
import "./style/index.less";
import classNames from 'classnames';
var Input = function Input(props) {
  var disabled = props.disabled,
    size = props.size,
    style = props.style,
    prepend = props.prepend,
    append = props.append,
    restprops = _objectWithoutProperties(props, _excluded);
  var classes = classNames('cherry-input', _defineProperty({}, "input-".concat(size), size));
  var innerClasses = classNames('input-inner', {
    'is-disabled': disabled
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: style
  }, prepend && /*#__PURE__*/React.createElement("div", {
    className: "input-group-prepend"
  }, prepend), /*#__PURE__*/React.createElement("input", _extends({
    className: innerClasses,
    disabled: disabled,
    placeholder: "\u8BF7\u8F93\u5165"
  }, restprops)), append && /*#__PURE__*/React.createElement("div", {
    className: "input-group-append"
  }, append));
};
Input.defaultProps = {
  disabled: false,
  size: 'default'
};
export default Input;