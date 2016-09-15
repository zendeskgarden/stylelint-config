'use strict';

module.exports = {
  'rules': {
    // Specify indentation
    'indentation': 2,
    // Disallow more than a specified number of adjacent empty lines
    'max-empty-lines': 1,
    // Limit the length of a line
    'max-line-length': 80,
    // Limit the depth of nesting
    'max-nesting-depth': 2,
    // Disallow browser hacks that are irrelevant to the browsers you are targeting
    'no-browser-hacks': true,
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
    // Disallow colors that are suspiciously close to being identical
    'no-indistinguishable-colors': null,
    // Disallow double-slash comments (`//...`) which are not supported by CSS
    'no-invalid-double-slash-comments': true,
    // Disallow missing end-of-source newline
    'no-missing-end-of-source-newline': true,
    // Disallow animation names that do not correspond to a `@keyframes` declaration
    'no-unknown-animations': true,
    // Disallow features that are unsupported by the browsers that you are targeting
    'no-unsupported-browser-features': [true, {
      'browsers': 'last 2 versions',
      'severity': 'warning'
    }]
  }
};
