---
title: 标签
group:
  title: 通用
  path: /zh-CN/components/base
toc: content
---

## 标签类型

```tsx
import React, { Fragment } from 'react';
import { Tag } from 'dumi-template';

export default () => {
  return (
    <Fragment>
      <Tag>标&nbsp;&nbsp;签</Tag>
      <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
      <Tag type="translucence">标&nbsp;&nbsp;签</Tag>
      <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
      <Tag type="icon">标&nbsp;&nbsp;签</Tag>
      <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    </Fragment>
  );
};
```

[更多技巧](https://d.umijs.org/guide/demo-principle)
