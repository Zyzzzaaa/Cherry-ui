import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["objects", "target"];
import React from 'react';
import "./style/index.less";

// object类型

var Breadcrumb = function Breadcrumb(props) {
  var objects = props.objects,
    _props$target = props.target,
    target = _props$target === void 0 ? '_self' : _props$target,
    restProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "cherry-breadcrumb"
  }, restProps), /*#__PURE__*/React.createElement("ul", {
    className: "breadcrumb-ul"
  }, objects === null || objects === void 0 ? void 0 : objects.map(function (obj, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
      key: index,
      className: "breadcrumb-li"
    }, /*#__PURE__*/React.createElement("a", {
      href: obj.link,
      target: target
    }, obj.text)), index !== objects.length - 1 && /*#__PURE__*/React.createElement("li", {
      className: "breadcrumb-li"
    }, "/"));
  })));
};
export default Breadcrumb;