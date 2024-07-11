/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Disallow duplicate custom properties within declaration blocks
    'declaration-block-no-duplicate-custom-properties': true,
    // Disallow duplicate properties within declaration blocks
    'declaration-block-no-duplicate-properties': [
      true,
      { ignoreProperties: ['composes'] }
    ],
    // Disallow duplicate font family names
    'font-family-no-duplicate-names': true,
    // Disallow duplicate selectors within keyframe blocks
    'keyframe-block-no-duplicate-selectors': true,
    // Disallow duplicate `@import` rules
    'no-duplicate-at-import-rules': true,
    // Disallow duplicate selectors
    'no-duplicate-selectors': true
  }
};
