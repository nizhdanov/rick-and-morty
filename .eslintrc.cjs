const { eslint } = require('@siberiacancode/eslint');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...eslint.react,
  overrides: [
    ...eslint.react.overrides,
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname
      },
      ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
      rules: {}
    }
  ]
};
