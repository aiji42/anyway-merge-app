/** @type {import('eslint-config-next')*/
module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  plugins: ["unused-imports", "baseui"],
  rules: {
    "@next/next/no-img-element": "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "never",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    'baseui/deprecated-theme-api': "warn",
    'baseui/deprecated-component-api': "warn",
    'baseui/no-deep-imports': "warn",
  },
};
