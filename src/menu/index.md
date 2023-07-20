---
title: Menu 菜单
nav:
  title: 组件
  order: 1
group:
  title: 导航
  order: 2
---

# Menu 菜单

菜单实现了结构分块，允许用户进行选择跳转。

## 代码演示

<code src="./demo/basic.tsx"></code>
<code src="./demo/vertical.tsx"></code>
<code src="./demo/sub.tsx"></code>
<code src="./demo/disabled.tsx"></code>


## API

### Menu
| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| mode | 菜单类型 | `horizontal`\|`vertical`| `horizontal` |
| defaultIndex | 默认选中的菜单项的索引值 | `string` | `0` |
| onSelect | 被选中时触发的回调函数 | `function` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `object` | - |

### MenuItem

| 参数      | 说明         | 类型                               | 默认值      |
| --------- | ------------ | ---------------------------------- | ----------- |
| index   | 菜单项的索引值 | `stirng`                           | -           |
| disabled | 是否禁用 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `object` | - |

### SubMenu
| 参数      | 说明         | 类型                               | 默认值      |
| --------- | ------------ | ---------------------------------- | ----------- |
| index   | 菜单项的索引值 | `stirng`                           | -           |
| title | 子菜单标题 | `string` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `object` | - |