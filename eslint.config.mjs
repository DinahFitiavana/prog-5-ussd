import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
    },
    rules: {
      "camelcase": ["error", { properties: "always" }],
    },
    extends: ["js/recommended"],
  },
]);
