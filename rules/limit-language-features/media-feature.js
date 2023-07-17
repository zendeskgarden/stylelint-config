/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify a list of disallowed media feature names
    'media-feature-name-disallowed-list': null,
    // Disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,
    // Specify a list of allowed media feature name and value pairs
    'media-feature-name-value-allowed-list': null,
    // Specify a list of allowed media feature names
    'media-feature-name-allowed-list': null,
    // Specify a list of allowed name and unit pairs within media features
    'media-feature-name-unit-allowed-list': null,
    // Specify context or prefix notation for media feature ranges
    'media-feature-range-notation': 'context'
  }
};
