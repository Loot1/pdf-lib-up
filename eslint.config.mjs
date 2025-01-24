import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          "accessibility": "no-public"
        }
      ],
      "@typescript-eslint/naming-convention": [
        "off",
        {
          "selector": "variable",
          "format": [
            "camelCase",
            "UPPER_CASE",
            "PascalCase"
          ],
          "leadingUnderscore": "allow",
          "trailingUnderscore": "forbid"
        }
      ],
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/prefer-for-of": "off",
      "arrow-body-style": [ "error", "always" ],
      "comma-dangle": [
        "error",
        {
          "functions": "never"
        }
      ],
      "curly": [ "error", "multi-line" ],
      "id-denylist": [ "error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined", "undefined" ],
      "id-match": "error",
      "max-len": "off",
      "no-bitwise": "off",
      "no-console": "off",
      "no-restricted-imports": [
        "error",
        "lodash"
      ],
      "no-underscore-dangle": "off",
      "prefer-arrow-callback": "error",
      "quotes": "off",
      "semi": "off"
    }
  }
];