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
  globalIgnores(["dist/**", "dist-v2/**", "node_modules/**", "src-v1-backup/**"]),

  {
    files: ["src/**/*.{ts,tsx}"],

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
          project: "./tsconfig.app.json",
        },
      },

      "boundaries/elements": FSD_LAYERS.map((layer) => ({
        type: layer,
        pattern: [`src/${layer}/**`, `@/${layer}/**`],
      })),

      "boundaries/ignore": ["src/test/**", "src/main.tsx"],
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

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

      "import/no-cycle": "error",

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

      "@typescript-eslint/no-non-null-assertion": "off",

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
