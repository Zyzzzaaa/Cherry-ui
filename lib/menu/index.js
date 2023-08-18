import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import "./style/index.less";
import { Alert } from "cherry-ui-react";

// 整体父组件的props

// 要传递给子组件的props

export var MenuContext = /*#__PURE__*/createContext({
  index: '0'
});
var Menu = function Menu(props) {
  var defaultIndex = props.defaultIndex,
    children = props.children,
    mode = props.mode,
    onSelect = props.onSelect,
    style = props.style,
    className = props.className;
  var _useState = useState(defaultIndex),
    _useState2 = _slicedToArray(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var classes = classNames('cherry-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });

  // 要传递的函数
  var handleClick = function handleClick(index) {
    setCurrentIndex(index);
    onSelect && onSelect(index);
  };
  // 要传递的value
  var passedContext = {
    index: currentIndex ? currentIndex : '0',
    onSelect: handleClick,
    mode: mode
  };

  // 遍历生成menuItem组件
  var childrenRender = function childrenRender() {
    return React.Children.map(children, function (child, index) {
      var childElement = child;
      var displayName = childElement.type.displayName; //解构幅值
      if (displayName == 'MenuItem' || displayName == 'SubMenu') {
        return /*#__PURE__*/React.cloneElement(childElement, {
          index: index.toString()
        });
      } else {
        return /*#__PURE__*/React.createElement(Alert, {
          title: "\u8B66\u544A\u63D0\u793A",
          type: "warning",
          closeable: true
        }, "Menu has a child which is not a MenuItem component");
      }
    });
  };
  return /*#__PURE__*/React.createElement("ul", {
    className: classes,
    style: style
  }, /*#__PURE__*/React.createElement(MenuContext.Provider, {
    value: passedContext
  }, childrenRender()));
};
Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: '0'
};
export default Menu;