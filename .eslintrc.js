module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended', // essential에서 recommended로 변경
        '@vue/airbnb',
    ],
    rules: {
        'linebreak-style': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "state",
                    "acc",
                    "e",
                    "ctx",
                    "req",
                    "request",
                    "res",
                    "response",
                    "$scope"
                ]
            }
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};