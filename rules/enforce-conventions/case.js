/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify lowercase or uppercase for function names
    'function-name-case': 'lower',
    // Specify lowercase or uppercase for type selector
    'selector-type-case': 'lower',
    // Specify lowercase or uppercase for keywords values
    'value-keyword-case': ['lower', { ignoreKeywords: ['/^U+.+$/'] }]
  }
};
