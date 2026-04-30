# Võ Đường Tâm Việt — Website

## Working on v2

The refactored codebase lives in `src-v2/` (Feature-Sliced Design, Tailwind 4, React 19).
The original `src/` runs untouched on the same repo until Sprint 5 cutover.

### Commands

| Task | Command |
|------|---------|
| Dev server (v2) | `npm run dev:v2` → http://localhost:5174 |
| Dev server (v1) | `npm run dev` → http://localhost:5173 |
| Build v2 | `npm run build:v2` → `dist-v2/` |
| Build v1 | `npm run build` → `dist/` |
| Lint (v2) | `npm run lint` |
| Typecheck (v2) | `npm run typecheck` |
| Tests | `npm test` |
| Tests watch | `npm run test:watch` |
| Coverage | `npm run test:coverage` |

### Architecture

Layers (import direction: top → bottom only):

```
app → pages → widgets → features → entities → shared
```

See `docs/ARCHITECTURE.md` for the full FSD spec.

### Commit convention

Conventional Commits enforced by commitlint:

```
feat(header): add mobile hamburger animation
fix(form): validate phone number before submit
chore(deps): upgrade framer-motion to 12
```

### Vercel preview for `refactor/v2`

The v2 branch needs its own Vercel project (separate from the v1 production project) configured in the dashboard:

- **Build Command**: `npm run build:v2`
- **Output Directory**: `dist-v2`
- **Root Directory**: `.` (project root)
- **Node Version**: 20

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
