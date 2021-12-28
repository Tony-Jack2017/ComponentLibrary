---
title: 开关
group:
  title: 通用
  path: /zh-CN/components/base
toc: content
---

## 基础开关

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

[更多技巧](https://d.umijs.org/guide/demo-principle)
