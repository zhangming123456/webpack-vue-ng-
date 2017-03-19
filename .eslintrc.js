module.exports = {
    'root': true,
    globals: {
        window: true,
        document: true,
        $: true
    },
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'script',
        ecmaFeatures: {}
    },
    env: {
        browser: true
    },
    rules: {
        'no-console': 2
    }
}
