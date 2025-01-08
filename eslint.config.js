const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
    eslintPluginPrettierRecommended,
    {
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                parser: "flow",
            },
        ],
    },
];
