import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export var Node = /*#__PURE__*/function () {
  function Node(options) {
    _classCallCheck(this, Node);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "data", void 0);
    _defineProperty(this, "depth", void 0);
    _defineProperty(this, "checked", void 0);
    _defineProperty(this, "indeterminate", void 0);
    _defineProperty(this, "collapse", void 0);
    _defineProperty(this, "parent", void 0);
    _defineProperty(this, "store", void 0);
    _defineProperty(this, "children", void 0);
    var id = options.id,
      name = options.name,
      data = options.data,
      parent = options.parent,
      children = options.children,
      store = options.store,
      _options$depth = options.depth,
      depth = _options$depth === void 0 ? 1 : _options$depth,
      _options$checked = options.checked,
      checked = _options$checked === void 0 ? false : _options$checked,
      _options$indeterminat = options.indeterminate,
      indeterminate = _options$indeterminat === void 0 ? false : _options$indeterminat,
      _options$collapse = options.collapse,
      collapse = _options$collapse === void 0 ? false : _options$collapse;
    this.id = id;
    this.name = name;
    this.data = data;
    this.depth = depth;
    this.parent = parent;
    this.checked = checked;
    this.indeterminate = indeterminate;
    this.children = children;
    this.collapse = collapse;
    this.store = store;
  }

  // 是否被全选中（分有、无子节点讨论）
  _createClass(Node, [{
    key: "hasChecked",
    value: function hasChecked(node) {
      var _node$children, _node$children2, _node$children3;
      if ((node === null || node === void 0 ? void 0 : (_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.length) === 0 && node.checked !== false) return true;
      return ((_node$children2 = node.children) === null || _node$children2 === void 0 ? void 0 : _node$children2.length) !== 0 && ((_node$children3 = node.children) === null || _node$children3 === void 0 ? void 0 : _node$children3.every(function (item) {
        return item.checked;
      }));
    }

    // 是否被半选中
  }, {
    key: "hasIndeterminate",
    value: function hasIndeterminate(node) {
      var _node$children4;
      return !node.hasChecked(node) && ((_node$children4 = node.children) === null || _node$children4 === void 0 ? void 0 : _node$children4.some(function (item) {
        return item.checked || item.indeterminate;
      }));
    }

    // 被选中
  }, {
    key: "setChecked",
    value: function setChecked(checked) {
      var _this = this;
      if (checked === false) {
        this.indeterminate = false;
      }
      this.checked = checked;
      // 自上向下
      var currentToBottom = function currentToBottom(node, checked) {
        var _node$children5;
        (_node$children5 = node.children) === null || _node$children5 === void 0 ? void 0 : _node$children5.forEach(function (item) {
          if (Array.isArray(item.children)) {
            currentToBottom(item, checked);
          }
          if (checked === false) {
            item.indeterminate = false;
          }
          item.checked = checked;
        });
      };
      // 自下向上
      var currentToTop = function currentToTop(node, checked) {
        if (node === null) return;
        node.checked = _this.hasChecked(node);
        node.indeterminate = _this.hasIndeterminate(node);
        currentToTop(node.parent, checked);
      };
      currentToBottom(this, checked);
      // 不是最顶部的节点都要更新父节点状态
      if (this.depth !== 1) {
        currentToTop(this, checked);
      }
    }

    // 展开或者关闭展示子节点
  }, {
    key: "setCollapse",
    value: function setCollapse(collapse) {
      if (this.store.accordion) {
        if (collapse === false) {
          this.collapse = false;
        } else {
          var _this$parent;
          var children = (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children;
          children === null || children === void 0 ? void 0 : children.forEach(function (node) {
            node.collapse = false;
          });
          this.collapse = true;
        }
      } else {
        this.collapse = collapse;
      }
    }

    // 创建子节点
  }, {
    key: "setChildren",
    value: function setChildren(data) {
      var _this2 = this;
      var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$store$treeOptio = this.store.treeOptions,
        _this$store$treeOptio2 = _this$store$treeOptio.id,
        id = _this$store$treeOptio2 === void 0 ? 'id' : _this$store$treeOptio2,
        _this$store$treeOptio3 = _this$store$treeOptio.name,
        name = _this$store$treeOptio3 === void 0 ? 'name' : _this$store$treeOptio3,
        _this$store$treeOptio4 = _this$store$treeOptio.children,
        children = _this$store$treeOptio4 === void 0 ? 'children' : _this$store$treeOptio4;
      var dfs = function dfs(data, depth, parent) {
        if (!data) return [];
        var res = data.map(function (item) {
          var node = _this2.store.createNode({
            id: item[id],
            name: item[name],
            data: item,
            children: [],
            parent: parent,
            depth: depth
          });
          node.children = Array.isArray(item[children]) ? dfs(item[children], depth + 1, node) : [];
          return node;
        });
        // depth = this.depth
        return res;
      };
      var result = dfs(data, this.depth + 1, this);
      if (append) {
        this.children = this.children ? this.children.concat(result) : result;
      } else {
        this.children = result;
      }
    }

    // 追加节点
  }, {
    key: "append",
    value: function append(node) {
      var _parentNode$children;
      if (node.depth === 0) return;
      var parentNode = node.parent;
      (_parentNode$children = parentNode.children) === null || _parentNode$children === void 0 ? void 0 : _parentNode$children.push(node);
    }

    // 删除节点
  }, {
    key: "remove",
    value: function remove(node) {
      var _parentNode$children2, _parentNode$children3;
      if (node.depth === 0) return;
      var parentNode = node.parent;
      var findIndex = parentNode === null || parentNode === void 0 ? void 0 : (_parentNode$children2 = parentNode.children) === null || _parentNode$children2 === void 0 ? void 0 : _parentNode$children2.findIndex(function (item) {
        return item.id === node.id;
      });
      if (findIndex && findIndex !== -1) (_parentNode$children3 = parentNode.children) === null || _parentNode$children3 === void 0 ? void 0 : _parentNode$children3.splice(findIndex, 1);
    }
  }]);
  return Node;
}();