'use strict'

module.exports = {
    "env": {
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "jsx-a11y",
        "prettier"
    ],
    "rules": {
        // .jsx rules
        "react/jsx-indent": ["error", 4],
        "react/prop-types": "off",
        // .js rules
        "strict": "off",
        "semi": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            4,
            {"ignoredNodes": ["JSXElement"]}
        ],
        "init-declarations": "error",
        "no-undef-init": "off",
        "comma-dangle": [
            "error", 
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never"
            }
        ],
        "brace-style": ["error", "1tbs"],
        "multiline-comment-style": ["error", "separate-lines"],
        "dot-notation": "off",
        "quote-props": ["error", "always"],
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "no-whitespace-before-property": "error",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "no-spaced-func": "off",
        "func-call-spacing": ["error", "always"],
        "block-spacing": ["error", "always"],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
        "object-curly-newline": ["error", { "consistent": true }],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "space-in-parens": "error",
        "no-nested-ternary": "error",
        "eqeqeq": "error",
        "quotes": ["error", "single", { "avoidEscape": true }],
        "no-unused-vars": ["error", { "argsIgnorePattern": "^(symbol|price|tag|since|limit|params|market|timeframe|api|path|code|currency|response|requestHeaders|requestBody|bidsKey|asksKey)" }],
        "new-parens": "error",
        "new-cap": ["error"],
        "no-var": "error",
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }],
        "no-warning-comments": ["warn", { "terms": ["fixme"] }],
        "padded-blocks": [
            "error",
        "always"
        ],
        "lines-between-class-members": "error",
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "padding-line-between-statements": [
          "error",
          { "blankLine": "always", "prev": "*", "next": "*"},
          { "blankLine": "always", "prev": "*", "next": "cjs-export" },
          { 
              "blankLine": "never", 
              "prev": [
                  "singleline-const", "singleline-let", "singleline-var"
              ],
              "next": [
                  "singleline-const", "singleline-let", "singleline-var"
              ]
          },
          { "blankLine": "never", "prev": "import", "next": "import" }
        ],
        "import/newline-after-import": ["off", { "count": 1 }],
        "prefer-template": "off",
        "curly": "error",
        "no-plusplus": "off",
        "no-restricted-properties": "off",
        "prefer-destructuring": "off",
        "class-methods-use-this": "off",
        "no-param-reassign": "off",
        "max-len": "off",
        "no-return-await": "off",
        "array-bracket-spacing": "off",
        "radix": "off",
        "camelcase": "off",
        "no-lonely-if": "off",
        "no-mixed-operators": "off",
        "no-shadow": "off",
        "no-useless-concat": "off",
        "no-continue": "off",
        "no-else-return": "off",
        "no-unneeded-ternary": "off",
        "operator-assignment": "off",
        "no-underscore-dangle": "off",
        "consistent-return": "off",
        "no-await-in-loop": "off"
    }
}