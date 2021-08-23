# use-delayed-loading

> Custom React Hook that will set loading &#x3D; true (fe. to show loader), but with a delay.

[![NPM](https://img.shields.io/npm/v/use-delayed-loading.svg)](https://www.npmjs.com/package/use-delayed-loading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

When you have a random delay in a some function, for example when fetching data from server.
The function can run for 10 seconds or it might finish immediatelly.
When that happens, you don't want to flicker a loader in your page.
Now, there are probably many solutions to this, but this is one lazy one.

Did this to test creating custom hook and publishing it to npm.

Used `npx create-react-hook` with typescript and yarn.
Created my hook, and then published with npm.

## Install

```bash
npm install --save use-delayed-loading
```

or

```bash
yarn add use-delayed-loading
```

## Usage

```tsx

import { useDelayedLoading } from "use-delayed-loading";

export const MyComponent: React.FC = () => {
  const [loading, setLoading] = useDelayedLoading(false);
  const loadDataFromApi = async () => {

    try{
      setLoading(true);
      const result = await fetch(...);
      ...
    }
    finally{
      setLoading(false);
    }
  }
  ...
  return loading ? "Loading" : "Hello there";
}

```

You can specify the delay yourself with a delay parameter that is 500 milliseconds by default.

```tsx
//Change delay to 1 second
const [loading, setLoading] = useDelayedLoading(false, 1000);
```

## License

MIT © Miika Mehtälä / [miika1006](https://github.com/miika1006)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook) with typescript and yarn.
