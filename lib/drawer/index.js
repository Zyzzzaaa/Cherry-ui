import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["open", "close", "inline", "onClose", "rootClassname", "rootStyle", "zIndex", "title", "children", "placement", "maskCloseable"];
import React, { useState } from 'react';
import classNames from "classnames";
import "./style/index.less";
import { IconClose } from "../icons";
var Drawer = function Drawer(props) {
  // props
  var open = props.open,
    close = props.close,
    inline = props.inline,
    onClose = props.onClose,
    _props$rootClassname = props.rootClassname,
    rootClassname = _props$rootClassname === void 0 ? '' : _props$rootClassname,
    _props$rootStyle = props.rootStyle,
    rootStyle = _props$rootStyle === void 0 ? {} : _props$rootStyle,
    _props$zIndex = props.zIndex,
    zIndex = _props$zIndex === void 0 ? 100 : _props$zIndex,
    title = props.title,
    children = props.children,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    _props$maskCloseable = props.maskCloseable,
    maskCloseable = _props$maskCloseable === void 0 ? true : _props$maskCloseable,
    restProps = _objectWithoutProperties(props, _excluded);

  // 控制遮罩层
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    masked = _useState2[0],
    setMasked = _useState2[1];
  // 点击遮罩层触发隐藏事件
  var onHide = function onHide() {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };

  // 样式相关
  rootStyle.zIndex = zIndex;
  var classes = classNames('cherry-drawer', rootClassname, {
    "drawer-inline": inline
  });
  React.useEffect(function () {
    if (open) {
      setMasked(!masked);
    } else {
      if (masked) {
        setMasked(false);
      } //避免首次渲染
    }
  }, [open]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    style: _objectSpread({}, rootStyle)
  }, restProps), masked ? /*#__PURE__*/React.createElement("div", {
    className: "drawer-mask",
    onClick: maskCloseable && open ? onHide : undefined
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: classNames('cherry-drawer-wrapper', "drawer-".concat(placement))
  }, open ? /*#__PURE__*/React.createElement("div", {
    className: classNames('drawer-content', "drawer-content-".concat(placement))
  }, /*#__PURE__*/React.createElement("header", {
    className: "drawer-header"
  }, close ? /*#__PURE__*/React.createElement("div", {
    className: "drawer-close",
    onClick: open ? onHide : undefined
  }, /*#__PURE__*/React.createElement(IconClose, null)) : null, /*#__PURE__*/React.createElement("div", {
    className: "drawer-title"
  }, title)), /*#__PURE__*/React.createElement("main", {
    className: "drawer-body"
  }, children)) : null));
};
Drawer.defaultProps = {
  close: true,
  inline: false,
  //root 
  rootClassname: '',
  rootStyle: {},
  zIndex: 100,
  //warpper中的内容 
  title: 'title',
  placement: 'right',
  //mask
  maskCloseable: true
};
export default Drawer;