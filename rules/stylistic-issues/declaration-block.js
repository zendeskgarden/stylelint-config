/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Require a newline or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-space-before': 'never',
    // Require or disallow a trailing semicolon within declaration blocks
    'declaration-block-trailing-semicolon': 'always'
  }
};
