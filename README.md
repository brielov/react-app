# react-app

This is my own `create-react-app` starter kit thing. The reason I made this is because `CRA` can be somewhat opinionated when it comes to customizing basic things like adding `tailwindcss` with `postcss` or simply tweaking your `webpack` config. This repo comes with everything I personally use on every new `SPA` project. Also, I feel that `CRA` is slow as f\*\*k.

### Install

```bash
npx degit brielov/react-app my-app
cd my-app
npm install
npm run dev
```

### Features

- Similar folder structure as `create-react-app`
- TypeScript 4.2
- JSX Factories
- PostCSS 8
- TailwindCSS 2.1
- CSS Modules
- Webpack 5
- SWC instead of Babel (very fast)
- Jest
- ESLint
- Prettier
- SPA ready (with customizable service worker)
- Husky hooks

### Missing features

- Fast refresh (waiting on `swc` [#588][588])

[588]: https://github.com/swc-project/swc/issues/588
