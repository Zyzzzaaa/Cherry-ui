---
title: Button 按钮
nav:
  title: 组件
  order: 1
group:
  title: 通用
  order: 1
---

# Button 按钮

按钮组件有三种大小、五种类型，还可以设置圆角按钮；按需选择对应的属性加入类名即可使用。

## 代码演示

### size

<code src="./demo/size.tsx"></code>

### type

<code src="./demo/type.tsx"></code>

### disabled

<code src="./demo/disabled.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| size | 按钮大小 | `small`\|`large`\|`default` | `default` |
| handleClick | 点击事件回调函数 | `(e: React.SyntheticEvent) => void` | `() => {return null;}` |
| disabled | 禁用 | `boolean` | `false` |
| type | 按钮类型 | `primary`\|`success`\|`warning`\|`danger`\|`link` | `primary` |
| herf | 要跳转的链接 | `string` | - |

支持原生 button 的其他所有属性。
