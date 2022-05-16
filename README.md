# react-app

This is a simple React app template powered by [vite](https://vitejs.dev).

## Stack

- [x] [Vite](https://vitejs.dev) as the bundler.
- [x] [Vitest](https://vitest.dev) as the test runner.
- [x] [React 18](https://reactjs.org) as the UI library.
- [x] [TypeScript](https://www.typescriptlang.org) as the language.
- [x] [PostCSS](https://postcss.org) as the CSS preprocessor.
- [x] [TailwindCSS](https://tailwindcss.com) as the CSS framework.
- [x] [ESLint](https://eslint.org) as the linter.
- [x] [Prettier](https://prettier.io) as the formatter.
- [x] [Husky](https://typicode.github.io/husky) as the git hooks manager.
- [x] [Git](https://git-scm.com) as the source control manager.
- [x] [GitHub Actions](https://github.com/features/actions) as the CI/CD manager.

## Usage

```sh
npx degit brielov/react-app my-app

cd my-app && npm install
```

## Imports

This project follows the remix-imports style.

```ts
// You can do this
import { Button } from "~/components/Button";

// Instead of this
import { Button } from '../../components/Button';
```