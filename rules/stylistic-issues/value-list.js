/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Require a newline or disallow whitespace after the commas of value lists
    'value-list-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of value lists
    'value-list-comma-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the commas of value lists
    'value-list-comma-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the commas of value lists
    'value-list-comma-space-before': 'never',
    // Limit the number of adjacent empty lines within value lists
    'value-list-max-empty-lines': 0
  }
};
