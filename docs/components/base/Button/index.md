---
title: Button
group:
  title: Base
  path: /components/base
toc: content
---

## base use

Demo:

```tsx
import React, { Fragment } from 'react';
import { Button } from 'dumi-template';

export default () => (
  <Fragment>
    <Button size="mini">
      <span>Click Me</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="small">
      <span>Click Me</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button>
      <span>Click Me</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="medium">
      <span>Click Me</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button size="large">
      <span>Click Me</span>
    </Button>
  </Fragment>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
