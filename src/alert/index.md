---
title: Alert 警告提示
nav:
  title: 组件
  order: 1
group:
  title: 反馈
  order: 4
---

# Alert 警告提示

用于页面展示重要的提示消息。`Alert`组件不属于浮层元素，不会自动消失或关闭。

## 代码演示

<code src="./demo/color.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| size | 按钮大小 | `small`\|`large`\|`default` | `default` |
| handleClick | 点击事件回调函数 | `(e: React.SyntheticEvent) => void` | `() => {return null;}` |
| disabled | 禁用 | `boolean` | `false` |
| type | 按钮类型 | `primary`\|`success`\|`warning`\|`danger`\|`link` | `primary` |
| herf | 要跳转的链接 | `string` | - |

支持原生 button 的其他所有属性。