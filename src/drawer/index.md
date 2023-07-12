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

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| type | 提示类型 | `primary`\|`success`\|`warning`\|`danger`|`primary`|
| title | Alert标题 | `string` | 提示 |
| children | Alert描述 | `string` | 描述 |
| closeable | 是否可关闭 | `boolean` | `false` |

### 事件

| 名称 | 描述 | 类型 |
| :-- | :-- | :-- |
| onClose | 关闭Alert时触发的事件 | `Function` | (event:MouseEvent) => void |
