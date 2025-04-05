# Personal Portfolio Monorepo

This monorepo is a showcase of both Angular and React development, managed with [Nx](https://nx.dev) (**v20.3.1**). It contains two separate portfolio applications — one built with **Angular 19** using **SCSS**, and another built with **React 18** using **Tailwind CSS** — as well as a shared, framework-agnostic **UI Web Components library** that is used in both projects.

---

## Technologies

| Area                   | Tech Stack                              |
|------------------------|-----------------------------------------|
|` Monorepo Tooling`     | Nx v20.3.1                              |
| `Angular App`          | Angular v19, SCSS, RxJs, Ngrx           |
| `React App`            | React v18, Tailwind CSS, Redux          |
| `UI Web Components`    | Web Components (Framework-agnostic)     |

The `libs/ui-web-components` library is written using standard Web Components and can be consumed by both Angular and React apps without framework-specific dependencies.

---

## Development Features

  - Code formatting with `Prettier`
  - Unit testing support with `Jest`
  - Linting with `ESLint`
  - SCSS for Angular, Tailwind for React
  - Shared UI components as Web Components
  - Git hooks with lint-staged + Husky
  - Custom Webpack configuration supported
  - Pull request templates

## Getting Started

### Install Dependencies

- npm install

---

## Commands

- nx serve react-portfolio
- nx serve angular-portfolio

---

## The shared UI library

### libs/ui-web-components

  Includes standalone Web Components to ensure seamless integration into both Angular and React apps. These components are:
  - Framework-agnostic
  - Reusable across both apps
  - Ideal for consistent branding and design

---

### How the ui-web-components are used in either app:

  - React: Import as regular custom elements
  - Angular: Add CUSTOM_ELEMENTS_SCHEMA to module

---

## Future integration features

- Add `storybook` for ui-web-components
- Set up e2e tests
  - Angular: `playwrite`
  - React: `cypress`
  - Library: `selenium` (possibly)
- Integrate CI/CD with `Github Actions` or `Vercel`
- Add internationalization (`i18n`) support
- Improve documentation and DX
