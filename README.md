# Modern UI Library Template

A starter template for building modern, accessible React component libraries with TypeScript, Tailwind CSS, and Radix UI primitives.

View on [npm](https://www.npmjs.com/package/modern-ui-lib).  
View on [Bundlephobia](https://bundlephobia.com/package/modern-ui-lib).

## Tech Stack

- **[React](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Vite](https://vite.dev/)** - Build tool and bundler
- **[Storybook](https://storybook.js.org/)** - Component documentation and development
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Lefthook](https://lefthook.dev/)** - Git hooks management

## Features

- **Tree-shakeable** - Optimized bundle size with tree-shaking support
- **Storybook documentation** - Interactive component playground and documentation
- **Light and dark mode** - Built-in theme support
- **Code linting and formatting** - Automated code quality with ESLint and Prettier
- **Pre-commit hooks** - Automated checks before commits via Lefthook
- **Accessible** - Components built on Radix UI primitives

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone git@github.com:rbika/modern-ui-lib.git
cd modern-ui-lib
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will start Storybook on `http://localhost:6006` where you can view and develop components.

### Available Scripts

- `npm run dev` - Start Storybook development server
- `npm run build` - Build the library for production
- `npm run build:storybook` - Build static Storybook site
- `npm run lint` - Run TypeScript type checking and ESLint
- `npm run prettier` - Format code with Prettier

## License

[MIT](https://github.com/rbika/modern-ui-lib/blob/master/LICENSE) license.
