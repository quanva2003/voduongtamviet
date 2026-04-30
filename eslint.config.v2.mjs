// @ts-check
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";

const FSD_LAYERS = [
  "app",
  "pages",
  "widgets",
  "features",
  "entities",
  "shared",
];

const LAYER_ALLOW = {
  app:      FSD_LAYERS.filter((l) => l !== "app"),
  pages:    ["widgets", "features", "entities", "shared"],
  widgets:  ["features", "entities", "shared"],
  features: ["entities", "shared"],
  entities: ["shared"],
  shared:   [],
};

export default defineConfig([
  globalIgnores(["dist-v2/**", "node_modules/**", "src/**"]),

  {
    files: ["src-v2/**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],

    plugins: {
      react,
      boundaries,
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: { version: "detect" },

      "import/resolver": {
        typescript: {
          project: "./tsconfig.v2.json",
        },
      },

      // Each layer matches both the real file path (for the linted file)
      // and the @/ alias form (for import specifiers that aren't resolved).
      "boundaries/elements": FSD_LAYERS.map((layer) => ({
        type: layer,
        pattern: [`src-v2/${layer}/**`, `@/${layer}/**`],
      })),

      "boundaries/ignore": ["src-v2/test/**", "src-v2/main.tsx"],
    },

    rules: {
      // React 19 — no need to import React for JSX
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // FSD layer isolation
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: FSD_LAYERS.map((layer) => ({
            from: layer,
            allow: LAYER_ALLOW[layer],
          })),
        },
      ],

      // No circular dependencies
      "import/no-cycle": "error",

      // Enforce consistent import ordering
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: FSD_LAYERS.map((layer) => ({
            pattern: `@/${layer}/**`,
            group: "internal",
          })),
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],

      // Block reaching into a slice's internals — only index.ts is public API
      "no-restricted-imports": [
        "error",
        {
          patterns: FSD_LAYERS.flatMap((layer) => [
            { group: [`@/${layer}/*/ui/*`],    message: `Import from @/${layer}/slice-name, not its internals.` },
            { group: [`@/${layer}/*/model/*`], message: `Import from @/${layer}/slice-name, not its internals.` },
            { group: [`@/${layer}/*/lib/*`],   message: `Import from @/${layer}/slice-name, not its internals.` },
            { group: [`@/${layer}/*/api/*`],   message: `Import from @/${layer}/slice-name, not its internals.` },
          ]),
        },
      ],
    },
  },
]);
