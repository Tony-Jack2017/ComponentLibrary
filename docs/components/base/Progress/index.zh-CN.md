---
title: 进度条
group:
  title: 通用
  path: /zh-CN/components/base
toc: content
---

## 进度条类型

```tsx
import React, { Fragment } from 'react';
import { Progress } from 'dumi-template';

export default () => {
  return (
    <Fragment>
      <Progress percent={30}></Progress>
      <Progress type="striped" percent={50}></Progress>
      <Progress type="flicker" percent={100}></Progress>
    </Fragment>
  );
};
```

[更多技巧](https://d.umijs.org/guide/demo-principle)
