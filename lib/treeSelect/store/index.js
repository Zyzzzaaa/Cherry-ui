import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { flattern } from "../index";
import { Node } from "./node";
export var Store = /*#__PURE__*/function () {
  function Store(data, options) {
    _classCallCheck(this, Store);
    _defineProperty(this, "treeOptions", void 0);
    _defineProperty(this, "data", void 0);
    _defineProperty(this, "accordion", void 0);
    //只允许展开一个节点
    _defineProperty(this, "root", void 0);
    var treeOptions = options.treeOptions,
      _options$accordion = options.accordion,
      accordion = _options$accordion === void 0 ? false : _options$accordion;
    this.data = data;
    this.accordion = accordion;
    this.treeOptions = treeOptions;
    this.root = this.createRoot([]);
  }

  // 创建根节点的私有方法
  _createClass(Store, [{
    key: "createRoot",
    value: function createRoot() {
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return new Node({
        id: 'root',
        name: 'root',
        children: children,
        depth: 0,
        parent: null,
        data: null,
        collapse: true,
        store: this
      });
    }

    // 创建普通树节点 Omit排除掉store
  }, {
    key: "createNode",
    value: function createNode(options) {
      return new Node(_objectSpread(_objectSpread({}, options), {}, {
        store: this
      }));
    }

    // dfs方法创建树
  }, {
    key: "createTree",
    value: function createTree(data) {
      var _this = this;
      var dfs = function dfs(data) {
        var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (!data || data.length === 0) {
          return [];
        }
        var _this$treeOptions = _this.treeOptions,
          id = _this$treeOptions.id,
          name = _this$treeOptions.name,
          children = _this$treeOptions.children;
        var res = data.map(function (item) {
          var node = _this.createNode({
            id: item[id],
            name: item[name],
            data: item,
            depth: depth,
            parent: parent,
            children: []
          });
          // children作为索引
          // node.children = children && Array.isArray(item[children])?dfs(item[children],depth+1,node):[]
          node.children = children ? dfs(item[children], depth + 1, node) : [];
          return node;
        });
        return res;
      };
      this.root.children = dfs(data, this.root.depth + 1, this.root);
      return this.root.children;
    }

    // 获得选中项的数组集合->能否改成push
  }, {
    key: "getCheckedNodes",
    value: function getCheckedNodes() {
      var indeterminate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var flatternTree = flattern(this.root.children);
      return flatternTree.reduce(function (total, current) {
        if (indeterminate) {
          if (current.checked || current.indeterminate) {
            total.concat(current);
          }
          return total;
        } else {
          return total.concat(current);
        }
      }, []);
    }

    // 把node的checked属性激活为true
  }, {
    key: "setCheckedKeys",
    value: function setCheckedKeys(keys) {
      var map = new Map(
      // 返回一个数组as:[[1,1],[3,3]]
      keys.map(function (item) {
        return [item, item];
      }));
      var flatternTree = flattern(this.root.children);
      flatternTree.forEach(function (node) {
        if (map.get(node.id)) {
          node.setChecked(true);
        }
      });
    }

    // 把node的expand属性激活为true
  }, {
    key: "setExpandKeys",
    value: function setExpandKeys(keys) {
      var map = new Map(keys.map(function (item) {
        return [item, item];
      }));
      var flatternTree = flattern(this.root.children);
      flatternTree.forEach(function (node) {
        if (map.get(node.id)) {
          node.setCollapse(true);
        }
      });
    }

    // 全选--把root的checked激活为true
  }, {
    key: "checkedAll",
    value: function checkedAll(checked) {
      this.root.setChecked(checked);
    }

    // 全部展开/关闭
  }, {
    key: "expandAll",
    value: function expandAll(collapse) {
      var dfs = function dfs(arr) {
        arr.forEach(function (node) {
          node.collapse = collapse;
          if (node.children) {
            dfs(node.children);
          }
        });
      };
      dfs(this.root.children);
    }
  }]);
  return Store;
}();