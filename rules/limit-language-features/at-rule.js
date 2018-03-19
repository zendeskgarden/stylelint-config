/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify a blacklist of disallowed at-rules
    'at-rule-blacklist': null,
    // Disallow vendor prefixes for @rules
    'at-rule-no-vendor-prefix': true,
    // Specify a whitelist of allowed at-rules
    'at-rule-whitelist': null
  }
};
