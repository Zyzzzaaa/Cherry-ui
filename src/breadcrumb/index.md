---
title: Breadcrumb
nav:
  title: 组件
  order: 1
group: 
  title: 导航
  order: 3
---

#  Breadcrumb 面包屑

面包屑用于识别页面在层次结构内的位置，并根据需要向上返回。

## 代码演示

<code src="./demo/basic.tsx"></code>

## API

| 属性     | 说明       | 类型                                   | 默认值  |
| :------- | :--------- | :-------------------- | :------ |
| object   | 面包屑对象数组 | `ObjectsType` | - |
| target    | 跳转方式     | `_blank `\| `self` |  `_self` |

### ObjectsType
| 属性     | 说明       | 类型                                   | 默认值  |
| :------- | :--------- | :-------------------- | :------ |
| text   | 面包屑文本 | `string` | - |
| link | 面包屑链接  | `string` | - |
