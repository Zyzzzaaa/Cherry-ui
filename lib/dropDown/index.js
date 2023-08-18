import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';
import "./style/index.less";

// 下拉菜单传参类型

// 弹出列表传参类型

// 弹出列表位置
var builtinPlacements = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
};

// 下拉菜单展示内容
var Menu = function Menu(_ref) {
  var items = _ref.items;
  var _useState = useState(-1),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];

  // 更新focus的menu-item
  function updateSelected(index, className) {
    if (className !== 'menu-item-forbidden') {
      setSelected(index);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "cherry-dropdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, items && items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: item.className === 'menu-item-forbidden' ? item.className : index === selected ? 'menu-item-focus' : 'menu-item',
      onClick: function onClick() {
        return updateSelected(index, item.className);
      }
    }, item.content);
  })));
};
var DropDown = function DropDown(_ref2) {
  var children = _ref2.children,
    items = _ref2.items,
    _ref2$trigger = _ref2.trigger,
    trigger = _ref2$trigger === void 0 ? 'hover' : _ref2$trigger,
    _ref2$popupPlacement = _ref2.popupPlacement,
    popupPlacement = _ref2$popupPlacement === void 0 ? 'bottom' : _ref2$popupPlacement;
  return /*#__PURE__*/React.createElement(Trigger, {
    popup: /*#__PURE__*/React.createElement(Menu, {
      items: items
    }),
    popupPlacement: popupPlacement,
    action: [trigger],
    builtinPlacements: builtinPlacements,
    popupAlign: {
      overflow: {
        adjustX: 1,
        adjustY: 1
      }
    }
  }, children);
};
export default DropDown;