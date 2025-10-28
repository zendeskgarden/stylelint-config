/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Disallow invalid preludes for at-rules
    'at-rule-prelude-no-invalid': true,
    // Disallow invalid hex colors
    'color-no-invalid-hex': true,
    // Disallow an unspaced operator within `calc` functions
    'function-calc-no-unspaced-operator': true,
    // Disallow `!important` within keyframe declarations
    'keyframe-declaration-no-important': true,
    // Disallow invalid media queries
    'media-query-no-invalid': true,
    // Disallow invalid named grid areas
    'named-grid-areas-no-invalid': true,
    // Disallow double-slash comments (`//...`) which are not supported by CSS
    'no-invalid-double-slash-comments': true,
    // Disallow invalid position `@import` rules
    'no-invalid-position-at-import-rule': true,
    // Disallow invalid position declarations
    'no-invalid-position-declaration': true,
    // Disallow (unescaped) newlines in strings
    'string-no-newline': true,
    // Disallow invalid syntax strings
    'syntax-string-no-invalid': true
  }
};
