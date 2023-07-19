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


## API

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| trigger | 下拉菜单触发方式 | `click`\|`hover`| `hover` |
| popupPlacement | 菜单弹出位置`bottom`\|`left`\|`top`\|`right` \|`bottomright`\|`topright`\|`bottomleft`\|`topleft` | `string` | `'bottom'` |
| items | 菜单配置项 | `itemProps` | - |
| children | 菜单内容 | `ReactNode` | - |
| onChange | 菜单显示时状态变化触发的函数 | `Function` | - |

### itemProps

| 参数      | 说明         | 类型                               | 默认值      |
| --------- | ------------ | ---------------------------------- | ----------- |
| content   | 菜单列表内容 | `stirng`                           | -           |
| className | 菜单列表类型 | `menu-item`\|`menu-item-forbidden` | `menu-item` |
