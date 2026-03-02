# Todo App

A feature-rich task management application built with React and TypeScript.
Users can create, edit, delete, and filter todos with real-time API persistence
and smooth loading states.

## Live Preview

[Todo App Demo](https://artemstadnik.github.io/todo-app/)

## Design Reference

Based on the classic [TodoMVC](https://todomvc.com/) design pattern.

## Technologies Used

- [React](https://react.dev/) 18 with hooks
- [TypeScript](https://www.typescriptlang.org/) 5
- [Vite](https://vitejs.dev/) for fast builds and HMR
- [Bulma](https://bulma.io/) CSS framework
- [SCSS](https://sass-lang.com/) for custom styling
- [Font Awesome](https://fontawesome.com/) icons
- [classnames](https://github.com/JedWatson/classnames) for conditional CSS classes
- [react-transition-group](https://reactcommunity.org/react-transition-group/) for animations
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code quality
- [Cypress](https://www.cypress.io/) for end-to-end testing

## Getting Started

Clone the repository:

```bash
git clone https://github.com/artemstadnik/todo-app.git
cd todo-app
```

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm start
```

## Features

- **Add todos** with title validation (no empty titles allowed)
- **Edit inline** by double-clicking a todo title
- **Delete** individual todos or clear all completed at once
- **Toggle completion** for single todos or toggle all at once
- **Filter** by All, Active, or Completed status
- **Loading indicators** during API operations
- **Error notifications** with auto-dismiss after 3 seconds
- **Optimistic UI** updates with rollback on failure
- **Responsive layout** that works on mobile and desktop
