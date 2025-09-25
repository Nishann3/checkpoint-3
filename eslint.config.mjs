import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "dist/**",
      "coverage/**",
      ".github/**"
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: { globals: globals.node },
    plugins: { js: pluginJs },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // ✅ Adds test, expect, describe, beforeEach, etc.
      },
    },
  },
];
