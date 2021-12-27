---
title: Switch
group:
  title: Base
  path: /components/base
toc: content
---

## Base Switch

```tsx
import React, { useState } from 'react';
import { Switch } from 'dumi-template';

export default () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <Switch checked={checked} onChange={handleClick} onClick={handleClick} />
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
