'use strict';

module.exports = {
  'rules': {
    // Require a single space or disallow whitespace after the colon in media features
    'media-feature-colon-space-after': [2, 'always'],
    // Require a single space or disallow whitespace before the colon in media features
    'media-feature-colon-space-before': [2, 'never'],
    // Disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': 2,
    // Require a single space or disallow whitespace after the range operator in media features
    'media-feature-range-operator-space-after': [2, 'always'],
    // Require a single space or disallow whitespace before the range operator in media features
    'media-feature-range-operator-space-before': [2, 'always']
  }
};
