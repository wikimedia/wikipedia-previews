module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'wikimedia/client',
    "plugin:cypress/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    require: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: [2, "never"],
    'no-nonoctal-decimal-escape': 'off',
    "no-only-tests/no-only-tests": "error",
    "cypress/no-unnecessary-waiting": "warn"
  },
  "plugins": [
    "cypress",
    "no-only-tests"
  ],
}
