module.exports = {
  extends: ['@mantine/eslint-config'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
  },
};
