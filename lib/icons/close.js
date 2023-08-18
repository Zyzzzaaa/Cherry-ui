import React from 'react';
export default function IconClose(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#333' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '16' : _ref$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 8L40 40",
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 40L40 8",
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}