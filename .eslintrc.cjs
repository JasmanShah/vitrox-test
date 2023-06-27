module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // allow .js files to contain JSX code
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single'],
    // we want to force semicolons
    semi: ['error', 'always'],
    // we use 2 spaces to indent our code
    indent: ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],
    // Ignore children prop-type
    'react/prop-types': ['off'],
    'require-jsdoc': ['off'],
    'max-len': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off'
  }
};
