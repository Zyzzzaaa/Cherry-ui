import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useState } from "react";
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { MenuContext } from ".";
import { DownOutlined } from "../icons";
var SubMenu = function SubMenu(props) {
  var index = props.index,
    title = props.title,
    children = props.children;
  var context = useContext(MenuContext);
  var isOpened = false;
  var _useState = useState(isOpened),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setOpen = _useState2[1];
  var classes = classNames('menu-item submenu-item', {
    'is-active': context.index == index,
    'is-opened': menuOpen,
    'is-vertical': context.mode == 'vertical'
  });

  // 节流
  var throttleMouse = function throttleMouse(event, flag) {
    var timer = null;
    if (!timer) {
      timer = setTimeout(function () {
        setOpen(flag);
        timer = null;
      }, 200);
    }
  };

  // 水平hover展开子菜单
  var hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: function onMouseEnter(event) {
      throttleMouse(event, true);
    },
    onMouseLeave: function onMouseLeave(event) {
      throttleMouse(event, false);
    }
  } : {};

  // 渲染子菜单
  var renderChildren = function renderChildren() {
    var subMenuClasses = classNames('cherry-submenu', {
      'menu-opened': menuOpen,
      'cherry-submenu-vertical': context.mode == 'vertical',
      'submenu-item-horizontal': context.mode !== 'vertical'
    });
    // 循环遍历生成带有index属性的元素
    var childrenComponent = React.Children.map(children, function (child, i) {
      var childElement = child;
      if (childElement.type.displayName == 'MenuItem') {
        return /*#__PURE__*/React.cloneElement(childElement, {
          index: "".concat(index, "-").concat(i)
        });
      } else {
        console.error('Menu has a child which is not a MenuItem component');
      }
    });
    // 返回子菜单
    return /*#__PURE__*/React.createElement(React.Fragment, null, menuOpen && /*#__PURE__*/React.createElement(CSSTransition, {
      in: menuOpen,
      timeout: 300,
      classNames: "cherry-subMenu-ul"
    }, /*#__PURE__*/React.createElement("ul", {
      className: subMenuClasses
    }, childrenComponent)));
  };
  return /*#__PURE__*/React.createElement("li", _extends({
    key: index,
    className: classes
  }, hoverEvents), /*#__PURE__*/React.createElement("div", {
    className: "submenu-title",
    onClick: function onClick() {
      return setOpen(!menuOpen);
    }
  }, title, /*#__PURE__*/React.createElement(DownOutlined, null)), renderChildren());
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;