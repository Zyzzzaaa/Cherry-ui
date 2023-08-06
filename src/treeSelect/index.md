---
title: TreeSelect 树形选择框
nav:
  title: 组件
  order: 1
group:
  title: 输入
  order: 5
---

# TreeSelct 树形选择框

树状选择器，用于选择树状结构的数据。

## 代码演示

<code src="./demo/basic.tsx"></code>

<!-- 
<code src="./demo/trigger.tsx"></code>

<code src="./demo/forbidden.tsx"></code>

<code src="./demo/location.tsx"></code>  -->

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---: | :---: | :---: | :---: | :---: |
| data | 树结构数据 | `Array<TreeNode<T>>` | - | - |
| data.value | 节点的真值 | `T` | - | - |
| data.label | 节点的显示值 | `string` | - | - |
| data.children | 子节点 | `Array<TreeNode<T>>` | - | - |
| data.unfold | 是否默认展开 | `boolean` | `true`or`false` | `false` |
| data.defaultSelected | 节点是否默认选中 | `boolean` | `true`or`false` | `false` |
| isSingle | 是否为单选 | `boolean` | `true`or`false` | `true` |
| checkable | 节点是否可选 | `boolean` | `true`or`false` | `true` |
| expandable | 是否开启展开箭头 | `boolean` | `true`or`false` | `true` |
| checkboxType | 勾选框样式 | `selectType` | `box`、`circle` | `box` |
| inputWidth | 勾选框与选择菜单宽度 | `string` | - | - |
| inputHeight | 选择菜单高度 | `string` | - | - |
| displaySelect | 是否默认打开选择菜单 | `boolean` | `true`or`false` | `false` |
| placeholder | 输入框占位符 | `string` | - | - |
| needInput | 是否显示输入框 | `boolean` | `true`or`false` | `true` |
| dropDownPosition | 选择菜单位置 | `string` | `bottom`、`leftBottom`、`rightBottom` | `bottom` |
| onSelect | 选择回调 | `(selected: Array<TreeNode<T>>) => void` | - | - |
| onExpand | 展开回调 | `(expanded: Set<T>) => void` | - | - |
