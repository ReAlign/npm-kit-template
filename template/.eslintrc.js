// .eslintrc.js
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true
    },
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [],
  "rules": {
    "quotes": ["error", "single"],
    "linebreak-style": ["error", "unix"]
  }
};
