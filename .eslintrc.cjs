module.exports = {
    root: true,
    env: {browser: true, es2021: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
    settings: {react: {version: '18.2'}},
    plugins: ['react-refresh', 'react'],
    rules: {
        'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
    },
};