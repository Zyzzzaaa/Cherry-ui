import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "className", "children", "type", "href", "disabled", "round"];
import React from 'react';
import classnames from 'classnames';
import "./style/index.less";

// export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';

// 原生按钮属性

// 链接按钮属性

var Button = function Button(ButtonProps) {
  var size = ButtonProps.size,
    className = ButtonProps.className,
    children = ButtonProps.children,
    type = ButtonProps.type,
    href = ButtonProps.href,
    disabled = ButtonProps.disabled,
    round = ButtonProps.round,
    restProps = _objectWithoutProperties(ButtonProps, _excluded);
  var classNames = classnames('cherry-btn', className, _defineProperty({
    'btn-small': size === 'small',
    'btn-large': size === 'large',
    'is-round': round,
    'is-disabled': disabled
  }, "cherry-components-".concat(type), type));
  if (type === 'link' && href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: classNames,
      href: href
    }, restProps), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classNames,
    disabled: disabled //禁用按钮
    ,
    type: "button"
  }, restProps), children);
};
Button.defaultProps = {
  size: 'default',
  className: '',
  children: '',
  type: 'primary',
  round: false,
  disabled: false
};
export default Button;