---
title: Drawer 抽屉
nav:
  title: 组件
  order: 1
group:
  title: 反馈
  order: 4
---

# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 代码演示

<code src="./demo/basic.tsx"></code>

<code src="./demo/position.tsx"></code>

<code src="./demo/currentDOM.tsx"></code>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| open | Drawer是否可见 | `boolean` | - |
| onClose | 点击遮罩层或左上角关闭按钮的回调 | `function(e)` | - |
| inline | 是否渲染在当前DOM元素 | `boolean` | `false` |
| zIndex | 设置Drawer的`z-index` | `number` | 100 |
| maskClosable | 点击遮罩层是否允许关闭 | `boolean` | `true` |
| placement | 抽屉的方向 | `right` \| `left` \| `top` \| `bottom` \| `right` |
| close | 是否显示左上角关闭按钮 | `boolean` | `true` |
| title | 抽屉标题 | `string` | title |
| children | 抽屉内容区域的内容 | `ReactNode` | - |
