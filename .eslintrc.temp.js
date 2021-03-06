module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        strict: ['error', 'global'], 
        'no-var': 'error', 
        'prefer-const': 'error', 
        'one-var': ['error', 'never'], 
        camelcase: 'error', 
        'no-unused-vars': 'error', 
        'no-multi-assign': 'error', 
        quotes: ['error', 'single'], 
        'no-array-constructor': 'error', 
        'no-new-object': 'error', 
        'quote-props': ['error', 'as-needed'], 
        'no-new-wrappers': 'error', 
        'no-extra-boolean-cast': 'error', 
        eqeqeq: 'error', 
        yoda: 'error', 
        'no-unneeded-ternary': 'error', 
        'no-nested-ternary': 'error', 
        strict: ['error', 'global'], 
        'multiline-comment-style': ['error', 'starred-block'], 
        'spaced-comment': ['error', 'always'], 
        semi: ['error', 'always'], 
        'semi-spacing': 'error', 
        'no-extra-semi': 'error', 
        'max-len': ['error', { code: 100 }], 
        'comma-style': ['error', 'last'], 
        'comma-dangle': ['error', 'always-multiline'], 
        indent: ['error', 4], 
        'space-infix-ops': 'error', 
        'brace-style': 'error', 
        'space-before-blocks': 'error', 
        'keyword-spacing': 'error', 
        'arrow-spacing': 'error', 
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }], 
        'newline-per-chained-call': 'error', 
        'space-in-parens': ['error', 'never'], 
        'array-bracket-spacing': ['error', 'never'], 
        'object-curly-spacing': ['error', 'always'], 
        'comma-spacing': ['error', {
            before: false,
            after: true,
        }], 
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 1,
        }], 
    },
};
