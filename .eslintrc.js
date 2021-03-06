module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
   ],
   "import/prefer-default-export": "off",
   "react/jsx-filename-extension": [2, { "extensions": [".tsx", ".jsx"] }],
   "@typescript-eslint/explicit-module-boundary-types": "off",
   "jsx-a11y/label-has-associated-control": "off",
   'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
  },
  settings: {
    'import/resolver': {
        node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectory: ['node_modules', 'src/'],
        },
    },
  }
};
