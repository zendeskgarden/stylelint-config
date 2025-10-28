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
    // Disallow unknown at-rule descriptors
    'at-rule-descriptor-no-unknown': true,
    // Disallow unknown values for descriptors within at-rules
    'at-rule-descriptor-value-no-unknown': true,
    // Disallow unknown at-rules
    'at-rule-no-unknown': true,
    // Disallow unknown values for properties within declarations
    'declaration-property-value-no-unknown': true,
    // Disallow unknown functions
    'function-no-unknown': true,
    // Disallow unknown media feature names
    'media-feature-name-no-unknown': true,
    // Disallow unknown values for media features
    'media-feature-name-value-no-unknown': true,
    // Disallow animation names that do not correspond to a `@keyframes` declaration
    'no-unknown-animations': true,
    // Disallow unknown custom media queries
    'no-unknown-custom-media': true,
    // Disallow unknown custom properties
    'no-unknown-custom-properties': true,
    // Disallow unknown properties
    'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
    // Disallow unknown pseudo-class selectors
    'selector-pseudo-class-no-unknown': true,
    // Disallow unknown pseudo-element selectors
    'selector-pseudo-element-no-unknown': true,
    // Disallow unknown type selectors
    'selector-type-no-unknown': true,
    // Disallow unknown units
    'unit-no-unknown': true
  }
};
