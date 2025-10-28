/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Disallow missing `var` function for custom properties
    'custom-property-no-missing-var-function': true,
    // Disallow missing generic families in lists of font family names
    'font-family-no-missing-generic-family-keyword': true,
    // Disallow missing scoping root for nesting selectors
    'nesting-selector-no-missing-scoping-root': true
  }
};
