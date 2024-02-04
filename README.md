# Les Frères Chaussettes

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Development process

### Main libraries

- EsLint
  - AirBnB
- Tailwind CSS
- Prettier
  - Tailwind Add-on
- TypeScript
- Next.js

### Initial setup

Setup was done following [these instructions](https://m4xshen.dev/posts/setup-nextjs-with-airbnb-eslint-prettier-typescript-and-tailwindcss/), but the following was notably missing (and necessary) for `.eslintrc.json`:

```
"parser": "@typescript-eslint/parser",
```
