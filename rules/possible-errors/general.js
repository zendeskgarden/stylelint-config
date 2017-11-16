'use strict';

module.exports = {
  'rules': {
    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': true,
    // Disallow duplicate selectors
    'no-duplicate-selectors': true,
    // Disallow empty sources
    'no-empty-source': true,
    // Disallow extra semicolons
    'no-extra-semicolons': true,
    // Disallow double-slash comments (`//...`) which are not supported by CSS
    'no-invalid-double-slash-comments': true,
    // Disallow animation names that do not correspond to a `@keyframes` declaration
    'no-unknown-animations': true
  }
};
