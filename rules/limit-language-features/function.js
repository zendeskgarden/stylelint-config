/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify a list of disallowed functions
    'function-disallowed-list': null,
    // Disallow scheme-relative urls
    'function-url-no-scheme-relative': null,
    // Specify a list of disallowed url schemes
    'function-url-scheme-disallowed-list': null,
    // Specify a list of allowed url schemes
    'function-url-scheme-allowed-list': ['data', '/^http/'],
    // Specify a list of only allowed functions
    'function-allowed-list': null
  }
};
