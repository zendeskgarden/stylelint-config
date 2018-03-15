/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Require or disallow an empty line before the closing brace of blocks
    'block-closing-brace-empty-line-before': 'never',
    // Require a newline or disallow whitespace after the closing brace of blocks
    'block-closing-brace-newline-after': 'always',
    // Require a newline or disallow whitespace before the closing brace of blocks
    'block-closing-brace-newline-before': 'always-multi-line',
    // Require a single space or disallow whitespace after the closing brace of blocks
    'block-closing-brace-space-after': null,
    // Require a single space or disallow whitespace before the closing brace of blocks
    'block-closing-brace-space-before': 'always-single-line',
    // Require a newline after the opening brace of blocks
    'block-opening-brace-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the opening brace of blocks
    'block-opening-brace-newline-before': null,
    // Require a single space or disallow whitespace after the opening brace of blocks
    'block-opening-brace-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the opening brace of blocks
    'block-opening-brace-space-before': 'always'
  }
};
