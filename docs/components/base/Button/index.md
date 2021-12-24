---
title: Button
group:
  title: Base
  path: /components/base
toc: content
---

## Button Type

```tsx
import React, { Fragment } from 'react';
import { Button } from 'dumi-template';

export default () => (
  <Fragment>
    <Button type="default">
      <span>Click Me</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button type="plain">
      <span>Click Me</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button type="dashed">
      <span>Click Me</span>
    </Button>
  </Fragment>
);
```

## Button Shape

```tsx
import React, { Fragment } from 'react';
import { Button } from 'dumi-template';

export default () => (
  <Fragment>
    <Button>
      <span>Click Me</span>
    </Button>
    <div style={{ display: 'inline', width: 0, margin: '0px 6px' }}></div>
    <Button shape="round">
      <span>Click Me</span>
    </Button>
  </Fragment>
);
```

## Button Size

Button size:

```tsx
import React, { Fragment } from 'react';
import { Button } from 'dumi-template';

export default () => (
  <Fragment>
    <Button size="mini" style={{ background: 'red' }}>
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
