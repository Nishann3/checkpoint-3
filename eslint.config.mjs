// eslint.config.mjs

export default [
  {
    ignores: [
      "node_modules",
      "dist",
      "coverage",
      ".github",
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

