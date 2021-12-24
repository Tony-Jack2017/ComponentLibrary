---
title: 按钮
group:
  title: 通用
  path: /zh-CN/components/base
toc: content
---

## 按钮类型

```tsx
import React, { Fragment } from 'react';
import { Button } from 'dumi-template';

export default () => (
  <Fragment>
    <Button type="default">
      <span>点&nbsp;&nbsp;击</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button type="plain">
      <span>点&nbsp;&nbsp;击</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button type="dashed">
      <span>点&nbsp;&nbsp;击</span>
    </Button>
  </Fragment>
);
```

## 按钮形状

```tsx
import React, { Fragment } from 'react';
import { Button } from 'dumi-template';

export default () => (
  <Fragment>
    <Button>
      <span>点&nbsp;&nbsp;击</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button shape="round">
      <span>点&nbsp;&nbsp;击</span>
    </Button>
  </Fragment>
);
```

## 按钮尺寸

Button size:

```tsx
import React, { Fragment } from 'react';
import { Button } from 'dumi-template';

export default () => (
  <Fragment>
    <Button size="mini" style={{ background: 'red' }}>
      <span>点&nbsp;&nbsp;击</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="small">
      <span>点&nbsp;&nbsp;击</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button>
      <span>点&nbsp;&nbsp;击</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="medium">
      <span>点&nbsp;&nbsp;击</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="large">
      <span>点&nbsp;&nbsp;击</span>
    </Button>
  </Fragment>
);
```

[更多技巧](https://d.umijs.org/guide/demo-principle)
