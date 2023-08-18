import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "direction", "side", "children"];
import React from 'react';
import classNames from "classnames";
import "./style/index.less";
var Space = function Space(props) {
  var _classNames;
  var size = props.size,
    direction = props.direction,
    side = props.side,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('cherry-space', (_classNames = {}, _defineProperty(_classNames, "space-".concat(direction), direction), _defineProperty(_classNames, "space-".concat(side), side), _classNames));
  var itemClasses = classNames('space-item', _defineProperty({}, "space-".concat(size), size));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps), React.Children.map(children, function (child) {
    return /*#__PURE__*/React.createElement("div", {
      className: itemClasses
    }, child);
  }));
};
Space.defaultProps = {
  size: 'small',
  direction: 'row',
  side: 'left'
};
export default Space;