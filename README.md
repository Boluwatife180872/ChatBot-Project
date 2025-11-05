# ChatBot Project

A small React + Vite application demonstrating a chat UI built from simple, reusable components.

This repository contains a lightweight chat interface (components in `src/components`) and a Vite development setup with ESLint configured.

## Highlights

- React 18 + Vite for fast development and HMR
- Simple component structure: `ChatInput`, `ChatMessages`, `ChatMessage`
- ESLint configured for React

## Prerequisites

- Node.js (recommended 18.x or newer)
- npm (bundled with Node) or a compatible package manager

## Quick start

Open a terminal in the `chatbot-project` folder and run:

```powershell
# install dependencies
npm install

# start dev server (Vite)
npm run dev
```

The dev server will print a local address (usually http://localhost:5173) — open it in your browser.

## Available scripts

The following npm scripts are available (see `package.json`):

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — produce a production build (output in `dist/`)
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the project

## Project structure

Key files and folders:

- `index.html` — app entry HTML
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — root React component
- `src/components/` — UI components (ChatInput, ChatMessage, ChatMessages)
- `public/` — static assets

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repo
2. Create a feature branch
3. Run tests and linting locally (`npm run lint`)
4. Open a pull request with a clear description of changes

## Notes

- This project currently does not include a LICENSE file — check the repository owner if you need licensing information.
- If you add new dependencies, keep `package.json` up to date and consider running the linter before committing.

## Contact

For questions or issues, open an issue in the repository or contact the maintainer listed on the repo.
