/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Require or disallow a leading zero for fractional numbers less than 1
    'number-leading-zero': 'never',
    // Disallow trailing zeros within numbers
    'number-no-trailing-zeros': true
  }
};
