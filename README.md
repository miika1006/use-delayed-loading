# use-delayed-loading

> Set loading &#x3D; true to show loader, but with a delay.

[![NPM](https://img.shields.io/npm/v/use-delayed-loading.svg)](https://www.npmjs.com/package/use-delayed-loading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-delayed-loading
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-delayed-loading'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [miika1006](https://github.com/miika1006)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
