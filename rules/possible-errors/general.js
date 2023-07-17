/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Disallow unknown annotations
    'annotation-no-unknown': true,
    // Disallow unknown values for properties within declarations
    'declaration-property-value-no-unknown': true,
    // Disallow duplicate selectors within keyframe blocks
    'keyframe-block-no-duplicate-selectors': true,
    // Specify keyword or percentage notation for keyframe selectors
    'keyframe-selector-notation': 'percentage',
    // Disallow invalid media queries
    'media-query-no-invalid': true,
    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': true,
    // Disallow duplicate selectors
    'no-duplicate-selectors': true,
    // Disallow empty sources
    'no-empty-source': true,
    // Disallow double-slash comments (`//...`) which are not supported by CSS
    'no-invalid-double-slash-comments': true,
    // Disallow animation names that do not correspond to a `@keyframes` declaration
    'no-unknown-animations': true,
    // Disallow unmatchable An+B selectors
    'selector-anb-no-unmatchable': true
  }
};
