/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Require a single space or disallow whitespace after the bang of declarations
    'declaration-bang-space-after': 'never',
    // Require a single space or disallow whitespace before the bang of declarations
    'declaration-bang-space-before': 'always',
    // Require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': 'always-multi-line',
    // Require a single space or disallow whitespace after the colon of declarations
    'declaration-colon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the colon of declarations
    'declaration-colon-space-before': 'never',
    // Require or disallow an empty line before declarations
    'declaration-empty-line-before': 'never'
  }
};
