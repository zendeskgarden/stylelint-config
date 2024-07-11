/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Disallow longhand properties that can be combined into one shorthand property
    'declaration-block-no-redundant-longhand-properties': true,
    // Disallow redundant values in shorthand properties
    'shorthand-property-no-redundant-values': true
  }
};
