/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify percentage or number notation for alpha-values
    'alpha-value-notation': 'number',
    // Specify alias notation for color-functions
    'color-function-alias-notation': 'without-alpha',
    // Specify modern or legacy notation for applicable color-functions
    'color-function-notation': 'modern',
    // Specify short or long notation for hex colors
    'color-hex-length': 'short',
    // Require numeric or named (where possible) `font-weight` values
    'font-weight-notation': 'numeric',
    // Specify number or angle notation for degree hues
    'hue-degree-notation': 'angle',
    // Specify string or URL notation for `@import` rules
    'import-notation': 'string',
    // Specify keyword or percentage notation for keyframe selectors
    'keyframe-selector-notation': 'percentage',
    // Specify number or percentage notation for lightness
    'lightness-notation': 'percentage',
    // Specify context or prefix notation for media feature ranges
    'media-feature-range-notation': 'context',
    // Specify simple or complex notation for `:not()` pseudo-class selectors
    'selector-not-notation': 'simple',
    // Specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'double'
  }
};
