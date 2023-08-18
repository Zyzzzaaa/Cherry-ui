import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from "react";
export function NodeShow(props) {
  var show = props.show,
    flex = props.flex,
    className = props.className,
    children = props.children;
  var _useState = useState(show),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  useEffect(function () {
    setVisible(show);
  }, [show]);
  return /*#__PURE__*/React.createElement("section", {
    className: className,
    style: {
      display: visible ? flex ? 'flex' : 'block' : 'none'
    }
  }, children);
}