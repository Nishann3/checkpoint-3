import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "coverage/**",     // ignore coverage output
      "dist/**",         // ignore build output
      "node_modules/**", // ignore dependencies
      ".github/**",      // ignore GitHub workflows
      "*.md",            // ignore markdown files
      "LICENSE"          // ignore license file
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    extends: [js.configs.recommended],
  },
]);

