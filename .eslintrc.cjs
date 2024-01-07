module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:vitest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2023,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'vitest',
    'jest-dom',
    'testing-library',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'testing-library/no-unnecessary-act': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    'import/ignore': ['/*.png/', '/*.jpg/'],
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
  ],
};
