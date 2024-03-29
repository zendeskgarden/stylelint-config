/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify modern or legacy notation for applicable color-functions
    'color-function-notation': 'modern',
    // Require or disallow alpha channel for hex colors
    'color-hex-alpha': null,
    // Require (where possible) or disallow named colors
    'color-named': 'never',
    // Disallow hex colors
    'color-no-hex': null,
    // Specify number or percentage notation for lightness
    'lightness-notation': 'percentage'
  }
};
