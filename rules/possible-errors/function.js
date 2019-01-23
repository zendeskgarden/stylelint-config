/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Disallow an invalid expression within `calc` functions
    'function-calc-no-invalid': true,
    // Disallow an unspaced operator within `calc` functions
    'function-calc-no-unspaced-operator': true,
    // Disallow direction values in `linear-gradient()` calls that are not valid according to the standard syntax
    'function-linear-gradient-no-nonstandard-direction': true
  }
};
