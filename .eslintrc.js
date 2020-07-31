const fs = require('fs');
const { logger } = require('jege/server');
const path = require('path');

const log = logger('[webapp]');

const packageDir = [__dirname].concat(
  fs.readdirSync(path.resolve(__dirname, 'packages'))
    .map((child) => path.resolve(__dirname, 'packages', child)),
);

log('.eslintrc.js: packageDir: %s', packageDir);

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'eslint-plugin-react',
    'sort-class-members',
  ],
  root: true,
  rules: {
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/member-ordering': ['error', {
      classes: [
        'static-field',
        'instance-field',
        'constructor',
        'static-method',
        'instance-method',
      ],
    }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-implied-eval': ['off'],
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
    }],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'arrow-body-style': ['off'],
    'arrow-parens': ['error', 'always'],
    'dot-notation': ['off'],
    'global-require': ['off'],
    'import/no-dynamic-require': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      packageDir,
    }],
    'import/no-unresolved': ['off'],
    'import/order': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/label-has-for': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'lines-between-class-members': ['off'],
    'no-await-in-loop': ['off'],
    'no-param-reassign': ['off', { props: false }],
    'no-underscore-dangle': ['off'],
    'no-unneeded-ternary': ['error', {
      defaultAssignment: true,
    }],
    'no-use-before-define': ['error', {
      functions: false,
    }],
    'object-curly-newline': ['off'],
    'prefer-arrow-callback': ['off', {
      allowNamedFunctions: true,
    }],
    'prefer-template': ['off'],
    quotes: ['off'],
    'react/destructuring-assignment': ['off'],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 2,
    }],
    'react/jsx-sort-props': ['error', {
      reservedFirst: false,
    }],
    'react/no-danger': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/prop-types': ['off'],
    'react/state-in-constructor': ['off'],
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys': ['error'],
    'typescript-sort-keys/interface': ['error', 'asc', {
      caseSensitive: false,
    }],
    'typescript-sort-keys/string-enum': 2,
    'wrap-iife': ['error', 'inside'],
  },
};
