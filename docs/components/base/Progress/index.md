---
title: Progress
group:
  title: Base
  path: /components/base
toc: content
---

## Progress Type

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

More skills for writing demo: https://d.umijs.org/guide/demo-principle
