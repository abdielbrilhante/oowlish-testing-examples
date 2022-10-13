const extended = [
  'eslint:recommended',
  'plugin:jsx-a11y/strict',
  'plugin:react/all',
  'plugin:react-hooks/recommended',
  'plugin:@typescript-eslint/recommended',
];

const rules = {
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-shadow': 'error',
  'array-bracket-newline': [
    'error',
    'consistent',
  ],
  'array-bracket-spacing': [
    'error',
    'never',
  ],
  'array-callback-return': 'error',
  'arrow-parens': 'error',
  'arrow-spacing': 'error',
  'block-spacing': 'error',
  'brace-style': 'error',
  'camelcase': 'error',
  'comma-dangle': [
    'error',
    'always-multiline',
  ],
  'comma-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  'comma-style': 'error',
  'computed-property-spacing': 'error',
  'consistent-return': 'error',
  'curly': 'error',
  'default-case': 'error',
  'eol-last': 'error',
  'eqeqeq': ['error', 'smart'],
  'func-call-spacing': 'error',
  'generator-star-spacing': 'error',
  '@typescript-eslint/indent': ['error', 2],
  'jest/max-expects': 'off',
  'jest/no-conditional-expect': 'off',
  'jest/no-hooks': 'off',
  'jest/prefer-expect-assertions': 'off',
  'jsx-quotes': 'error',
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  'linebreak-style': [
    'error',
    'unix',
  ],
  'max-len': [
    'error',
    {
      code: 120,
      tabWidth: 2,
    },
  ],
  'multiline-comment-style': [
    'error',
    'separate-lines',
  ],
  'new-parens': 'error',
  'no-buffer-constructor': 'error',
  'no-case-declarations': 'off',
  'no-console': 'error',
  'no-constructor-return': 'error',
  'no-duplicate-imports': 'error',
  'no-floating-decimal': 'error',
  'no-global-assign': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    },
  ],
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-require': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
  'no-path-concat': 'error',
  'no-plusplus': 'error',
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-shadow': 'off',
  'no-trailing-spaces': 'error',
  'no-undef-init': 'error',
  'no-unneeded-ternary': 'error',
  'no-unused-expressions': 'error',
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-whitespace-before-property': 'error',
  'object-curly-newline': [
    'error',
    {
      consistent: true,
    },
  ],
  'object-curly-spacing': [
    'error',
    'always',
  ],
  'operator-assignment': 'error',
  'padded-blocks': [
    'error',
    'never',
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quotes': ['error', 'single', { avoidEscape: true }],
  'quote-props': [
    'error',
    'consistent-as-needed',
  ],
  'react/forbid-component-props': 'off',
  'react/jsx-indent': [2, 2],
  'react/jsx-indent-props': [2, 2],
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  'react/jsx-handler-names': 'off',
  'react/jsx-max-depth': 'off',
  'react/jsx-max-props-per-line': 'off',
  'react/jsx-newline': 'off',
  'react/jsx-no-bind': 'off',
  'react/jsx-no-literals': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': 'off',
  'react/no-multi-comp': 'off',
  'react/no-set-state': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/state-in-constructor': 'off',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'rest-spread-spacing': 'error',
  'no-var': 'error',
  'semi': [
    'error',
    'always',
  ],
  'semi-spacing': 'error',
  'semi-style': 'error',
  'space-before-blocks': 'error',
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': 'error',
  'space-infix-ops': 'error',
  'space-unary-ops': [
    'error',
    {
      words: true,
      nonwords: false,
    },
  ],
  'spaced-comment': 'error',
  'switch-colon-spacing': 'error',
  'template-curly-spacing': 'error',
  'template-tag-spacing': 'error',
  'wrap-iife': 'error',
  'yield-star-spacing': 'error',
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['jest', 'jsx-a11y', '@typescript-eslint'],
  globals: {
    process: 'readonly',
    module: 'readonly',
    exports: 'readonly',
    global: 'readonly',
    $$mockQuery: 'readonly',
    $$mockMutation: 'readonly',
    $$visit: 'readonly',
    $$rerender: 'readonly',
    $$waitFor: 'readonly',
    $$axe: 'readonly',
    $$chance: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  rules: rules,
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      excludedFiles: '*.test.tsx?',
      extends: extended,
      rules: rules,
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      extends: [...extended, 'plugin:jest/all'],
      rules: rules,
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};