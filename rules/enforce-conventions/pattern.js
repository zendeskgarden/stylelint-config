/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify a pattern for comments
    'comment-pattern': null,
    // Specify pattern of custom media query names
    'custom-media-pattern': 'zd-.+',
    // Specify pattern of custom properties
    'custom-property-pattern': 'zd-.+',
    // Specify a pattern for keyframe names
    'keyframes-name-pattern': 'zd-.+',
    // Specify a pattern for class selectors
    'selector-class-pattern': null,
    // Specify a pattern for id selectors
    'selector-id-pattern': null,
    // Specify a pattern for the selectors of rules nested within rules
    'selector-nested-pattern': null
  }
};
