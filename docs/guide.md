---
title: '关于 Cherry UI'
nav:
  title: 开发指南
---

# cherry-ui

`'cherry-ui-react'`，是一款基于 `Dumi`，由 `React` + `TypeScript` 开发的组件库 。UI 设计方面大量参考 [Ant Design](https://ant.design/index-cn)

## 快速上手

使用`create-react-App`创建一个`react`项目，并引入 `'cherry-ui-react'`

### 安装和初始化

```powershell
 npm install "'cherry-ui-react'"
```

### 使用组件

以使用`Button`组件为例

#### 完整引入

会引入所有组件的样式

```javascript
import React from 'react';
import { Button } from 'cherry-ui-react';
import 'cherry-ui-react/lib/index.css';

const App = () => (
  <>
    <Button>Button</Button>
  </>
);
export default App;
```

#### 按需引入

```javascript
import React from 'react';
import { Button } from 'cherry-ui-react';
import 'cherry-ui-react/lib/button/style/index.css';

const App = () => (
  <>
    <Button>Button</Button>
  </>
);
```
