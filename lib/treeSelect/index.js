import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList } from "react-window";
import { Store } from "./store";
import "./style/index.less";
import { CheckBox } from 'cherry-ui-react';
import { NodeShow } from "./store/NodeShow";
import { RightOutlined } from "../icons";
import { Space } from 'cherry-ui-react';
import classNames from 'classnames';
// 拍平数组
export var flattern = function flattern(arr) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  return arr.reduce(function (total, current) {
    var isArray = Array.isArray(current[key]);
    total.push(current);
    if (isArray) {
      total.push.apply(total, _toConsumableArray(flattern(current[key], key)));
    }
    return total;
  }, []);
};
var TreeSelect = function TreeSelect(props) {
  var _props$options = props.options,
    options = _props$options === void 0 ? {
      id: 'id',
      name: 'name',
      children: 'children'
    } : _props$options,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    height = props.height,
    accordion = props.accordion,
    defaultCheckedKeys = props.defaultCheckedKeys,
    defaultExpand = props.defaultExpand,
    defaultExpandAll = props.defaultExpandAll;
  var store = new Store(data, {
    treeOptions: options,
    accordion: accordion
  });
  var treeRef = useRef(null);
  // 创建树
  var _useState = useState(store.createTree(data)),
    _useState2 = _slicedToArray(_useState, 2),
    tree = _useState2[0],
    setTree = _useState2[1];
  // 创建拍平树的列表
  var _useState3 = useState(flattern(tree)),
    _useState4 = _slicedToArray(_useState3, 2),
    flatternTree = _useState4[0],
    setFlatternTree = _useState4[1];
  // 自适应高度
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    parentHeight = _useState6[0],
    setParentHeight = _useState6[1];
  useEffect(function () {
    setTree(store.createTree(data));
  }, [data]);
  useEffect(function () {
    setFlatternTree(flattern(tree));
  }, [tree]);
  useEffect(function () {
    if (defaultCheckedKeys) store.setCheckedKeys(defaultCheckedKeys);
    if (defaultExpand) store.setExpandKeys(defaultExpand);
    if (defaultExpandAll) store.expandAll(defaultExpandAll);
  }, [defaultCheckedKeys, defaultExpand, defaultExpandAll]);
  useEffect(function () {
    var observer = new MutationObserver(function (entries) {
      var el = entries[0].target;
      setParentHeight(height || el.offsetHeight);
    });
    if (treeRef.current) {
      observer.observe(treeRef.current.parentNode, {
        childList: true,
        subtree: true
      });
    }
    return function () {
      observer.disconnect();
    };
  }, [height]);

  // 判断是否展示node
  var showNode = function showNode(node) {
    var _node$parent;
    if (!node) return false;
    if (!((_node$parent = node.parent) !== null && _node$parent !== void 0 && _node$parent.collapse)) return false;
    if (node.depth === 1) return true;
    return showNode(node.parent);
  };
  var treeNode = function treeNode(_ref) {
    var data = _ref.data,
      index = _ref.index,
      style = _ref.style;
    var node = data[index];
    var changeHandle = function changeHandle(e) {
      node.setChecked(e === null || e === void 0 ? void 0 : e.target.checked);
      setTree(_toConsumableArray(tree));
    };
    var arrowClasses = classNames('tree-arrow', {
      'tree-arrow-rotate': node.collapse
    });
    var openNode = function openNode() {
      node.setCollapse(!node.collapse);
      setTree(_toConsumableArray(tree));
    };
    return /*#__PURE__*/React.createElement("li", {
      key: node.id,
      className: "tree-node",
      style: _objectSpread({
        display: showNode(node) ? 'block' : 'none',
        marginLeft: "".concat((node.depth - 1) * 20, "px")
      }, style)
    }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(NodeShow, {
      show: !!node.children && node.children.length !== 0
    }, /*#__PURE__*/React.createElement("div", {
      className: arrowClasses,
      onClick: openNode
    }, /*#__PURE__*/React.createElement(RightOutlined, null))), /*#__PURE__*/React.createElement(CheckBox, {
      checked: node.checked,
      indeterminate: node.indeterminate,
      onChange: changeHandle
    }, node.name)));
  };
  var displayNode = flatternTree.filter(function (node) {
    return showNode(node);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "cherry-tree",
    ref: treeRef
  }, /*#__PURE__*/React.createElement(FixedSizeList, {
    itemCount: displayNode.length,
    itemData: displayNode,
    itemSize: 50,
    innerElementType: "ul",
    width: "100%",
    height: parentHeight,
    style: {
      overflow: height ? 'auto' : 'none'
    }
  }, treeNode));
};
TreeSelect.defaultProps = {
  accordion: false,
  defaultExpandAll: false,
  defaultExpand: [],
  defaultCheckedKeys: []
};
export default TreeSelect;