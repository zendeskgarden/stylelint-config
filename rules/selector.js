'use strict';

module.exports = {
  'rules': {
    // Require a single space or disallow whitespace after the combinators of selectors
    'selector-combinator-space-after': [2, 'always'],
    // Require a single space or disallow whitespace before the combinators of selectors
    'selector-combinator-space-before': [2, 'always'],
    // Disallow attribute selectors
    'selector-no-attribute': 0,
    // Disallow combinators in selectors
    'selector-no-combinator': 0,
    // Disallow id selectors
    'selector-no-id': 2,
    // Disallow type selectors
    'selector-no-type': 0,
    // Disallow universal selectors
    'selector-no-universal': 0,
    // Disallow vendor prefixes for selectors
    'selector-no-vendor-prefix': 2,
    // Specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 0,
    // Disallow the composition of `:root` selectors
    'selector-root-no-composition': 2
  }
};
