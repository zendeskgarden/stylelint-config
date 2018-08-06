/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify a blacklist of disallowed media feature names
    'media-feature-name-blacklist': null,
    // Disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,
    // Specify a whitelist of allowed media feature name and value pairs
    'media-feature-name-value-whitelist': null,
    // Specify a whitelist of allowed media feature names
    'media-feature-name-whitelist': null
  }
};
