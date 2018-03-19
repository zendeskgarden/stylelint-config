/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Require a single space or disallow whitespace after the colon in media features
    'media-feature-colon-space-after': 'always',
    // Require a single space or disallow whitespace before the colon in media features
    'media-feature-colon-space-before': 'never',
    // Specify lowercase or uppercase for media feature names
    'media-feature-name-case': 'lower',
    // Require a single space or disallow whitespace on the inside of the parentheses within media features
    'media-feature-parentheses-space-inside': 'never',
    // Require a single space or disallow whitespace after the range operator in media features
    'media-feature-range-operator-space-after': 'always',
    // Require a single space or disallow whitespace before the range operator in media features
    'media-feature-range-operator-space-before': 'always'
  }
};
