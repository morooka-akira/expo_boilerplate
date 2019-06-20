module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // ESLintでTypescriptのlintをする
    'plugin:react/recommended', // Reactのlint
    'plugin:prettier/recommended', // ESLintとPretterとの競合を除去
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/core-modules': ['app'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
}
