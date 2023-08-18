import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "title", "children", "closeable", "onClose"];
import React, { useState } from "react";
import classNames from 'classnames';
import "./style/index.less";
import { IconClose } from "../icons";
var Alert = function Alert(props) {
  var type = props.type,
    title = props.title,
    children = props.children,
    closeable = props.closeable,
    onClose = props.onClose,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('cherry-alert', _defineProperty({}, "alert-".concat(type), type));
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    close = _useState2[0],
    setClose = _useState2[1];
  function closeAlert() {
    setClose(true);
  }
  return /*#__PURE__*/React.createElement("div", null, !close && /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alert-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "alert-in"
  }, children, closeable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alert-close",
    onClick: onClose || closeAlert
  }, /*#__PURE__*/React.createElement(IconClose, null)))));
};
Alert.defaultProps = {
  type: 'primary',
  title: '提示',
  children: '描述'
};
export default Alert;