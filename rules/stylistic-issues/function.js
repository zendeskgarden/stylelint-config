/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Require a newline or disallow whitespace after the commas of functions
    'function-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of functions
    'function-comma-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the commas of functions
    'function-comma-space-after': 'always',
    // Require a single space or disallow whitespace before the commas of functions
    'function-comma-space-before': 'never',
    // Limit the number of adjacent empty lines within functions
    'function-max-empty-lines': 0,
    // Specify lowercase or uppercase for function names
    'function-name-case': 'lower',
    // Require a newline or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-newline-inside': 'never-multi-line',
    // Require a single space or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-space-inside': 'never',
    // Require or disallow quotes for urls
    'function-url-quotes': ['always', {
      except: ['empty']
    }],
    // Require a single space or disallow whitespace after functions
    'function-whitespace-after': 'always'
  }
};
