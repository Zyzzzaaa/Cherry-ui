import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "checked", "indeterminate", "onChange", "children"];
import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import "./style/index.less";
var CheckBox = function CheckBox(props) {
  var disabled = props.disabled,
    _props$checked = props.checked,
    checked = _props$checked === void 0 ? false : _props$checked,
    _props$indeterminate = props.indeterminate,
    indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
    onChange = props.onChange,
    children = props.children,
    restprops = _objectWithoutProperties(props, _excluded);
  var _useState = useState(checked),
    _useState2 = _slicedToArray(_useState, 2),
    inputChecked = _useState2[0],
    setChecked = _useState2[1];
  var _useState3 = useState(indeterminate),
    _useState4 = _slicedToArray(_useState3, 2),
    half = _useState4[0],
    setHalf = _useState4[1];
  useEffect(function () {
    setChecked(checked);
    setHalf(indeterminate);
  }, [checked, half]);

  // span的类名
  var spanClasses = classNames('cherry-selectbox-span', {
    "is-checked": inputChecked,
    "half-checked": inputChecked,
    'span-disabled': disabled
  });
  var changeHandle = function changeHandle(e) {
    setChecked(e.target.checked);
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", _extends({}, restprops, {
    className: "cherry-checkBox"
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    disabled: disabled,
    checked: inputChecked,
    className: classNames('cherry-checkbox-input', [inputChecked ? 'is-checked' : half ? 'is-half' : '', inputChecked ? 'icon-checkbox-fill' : half ? 'icon-checkbox-half-fill' : '']),
    onChange: changeHandle
  }), /*#__PURE__*/React.createElement("span", {
    className: spanClasses
  }, children));
};
export default CheckBox;