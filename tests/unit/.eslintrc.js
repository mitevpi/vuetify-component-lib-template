module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 5,
          allowFirstLine: true,
        },
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
};
