module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["prettier", "plugin:jsx-a11y/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: [
    "react",
    "prettier",
    "unused-imports",
    "jsx-a11y",
    "import-helpers",
  ],
  rules: {
    "prettier/prettier": 0,
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "jsx-a11y/anchor-has-content": "off",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "no-console": "warn",
    "no-debugger": "error",
    "arrow-body-style": ["error", "as-needed"],
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          "/^react/",
          "module",
          "/^containers/",
          "/^pages/",
          "/^layouts/",
          "/^components/",
          ["parent", "sibling", "index"],
          "/^assets/",
          "/^constants/",
          "/^context-api/",
          "/^db/",
          "/^i18n/",
          "/^lib/",
          "/^utils/",
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
