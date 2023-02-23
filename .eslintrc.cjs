module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'react/button-has-type': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/extensions': 'off',
        '@typescript-eslint/default-param-last': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-nested-ternary': 'off'
    },
}
