/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Disallow deprecated at-rules
    'at-rule-no-deprecated': true,
    // Disallow deprecated keywords for properties within declarations
    'declaration-property-value-keyword-no-deprecated': true,
    // Disallow deprecated media types
    'media-type-no-deprecated': true,
    // Disallow deprecated properties
    'property-no-deprecated': true
  }
};
