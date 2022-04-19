/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Limit the number of values for a list of properties within declarations
    'declaration-property-max-values': null,
    // Disallow `!important` within declarations
    'declaration-no-important': true,
    // Specify a list of disallowed property and unit pairs within declarations
    'declaration-property-unit-disallowed-list': null,
    // Specify a list of allowed property and unit pairs within declarations
    'declaration-property-unit-allowed-list': null,
    // Specify a list of disallowed property and value pairs within declarations
    'declaration-property-value-disallowed-list': null,
    // Specify a list of allowed property and value pairs within declarations
    'declaration-property-value-allowed-list': null
  }
};
