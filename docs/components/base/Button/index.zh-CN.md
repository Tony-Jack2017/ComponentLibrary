---
title: 按钮
group:
  title: 通用
  path: /zh-CN/components/base
toc: content
---

## 基础使用

Demo:

```tsx
import React, { Fragment } from 'react';
import { Button } from 'dumi-template';

export default () => (
  <Fragment>
    <Button size="mini">
      <span>查&nbsp;&nbsp;询</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="small">
      <span>查&nbsp;&nbsp;询</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button>
      <span>查&nbsp;&nbsp;询</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="medium">
      <span>查&nbsp;&nbsp;询</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="large">
      <span>查&nbsp;&nbsp;询</span>
    </Button>
  </Fragment>
);
```

[更多技巧](https://d.umijs.org/guide/demo-principle)
