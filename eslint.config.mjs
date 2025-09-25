import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "coverage/**",   // ignore test coverage reports
      "dist/**",       // ignore build output
      "node_modules/**" // ignore dependencies
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // ✅ so test, expect, describe are not flagged
      },
    },
    extends: [js.configs.recommended],
  },
]);
