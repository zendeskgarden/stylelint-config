'use strict';

module.exports = {
  'rules': {
    // Require a single space or disallow whitespace after the colon in media features
    'media-feature-colon-space-after': 'always',
    // Require a single space or disallow whitespace before the colon in media features
    'media-feature-colon-space-before': 'never',
    // Specify a blacklist of disallowed media feature names
    'media-feature-name-blacklist': null,
    // Specify lowercase or uppercase for media feature names
    'media-feature-name-case': 'lower',
    // Disallow unknown media feature names
    'media-feature-name-no-unknown': true,
    // Disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,
    // Specify a whitelist of allowed media feature names
    'media-feature-name-whitelist': null,
    // Require a single space or disallow whitespace on the inside of the parentheses within media features
    'media-feature-parentheses-space-inside': 'never',
    // Require a single space or disallow whitespace after the range operator in media features
    'media-feature-range-operator-space-after': 'always',
    // Require a single space or disallow whitespace before the range operator in media features
    'media-feature-range-operator-space-before': 'always'
  }
};
