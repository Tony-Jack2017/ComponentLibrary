---
title: Tag
group:
  title: Base
  path: /components/base
toc: content
---

## Tag Type

```tsx
import React, { Fragment } from 'react';
import { Tag } from 'dumi-template';

export default () => {
  return (
    <Fragment>
      <Tag>tag</Tag>
      <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
      <Tag type="translucence">tag</Tag>
      <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
      <Tag type="icon">tag</Tag>
      <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    </Fragment>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
