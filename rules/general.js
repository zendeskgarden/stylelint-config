'use strict';

module.exports = {
  'rules': {
    // Specify indentation
    'indentation': 2,
    // Disallow more than a specified number of adjacent empty lines
    'max-empty-lines': 1,
    // Limit the length of a line
    'max-line-length': [80, {
      ignorePattern: ['/--zd-.+/']
    }],
    // Limit the depth of nesting
    'max-nesting-depth': 2,
    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': true,
    // Disallow duplicate selectors
    'no-duplicate-selectors': true,
    // Disallow empty sources
    'no-empty-source': true,
    // Disallow end-of-line whitespace
    'no-eol-whitespace': true,
    // Disallow extra semicolons
    'no-extra-semicolons': true,
    // Disallow double-slash comments (`//...`) which are not supported by CSS
    'no-invalid-double-slash-comments': true,
    // Disallow missing end-of-source newline
    'no-missing-end-of-source-newline': true,
    // Disallow animation names that do not correspond to a `@keyframes` declaration
    'no-unknown-animations': true
  }
};
