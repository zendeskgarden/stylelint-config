/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Limit the number of declaration within a single line declaration block
    'declaration-block-single-line-max-declarations': 1,
    // Limit the number of values for a list of properties within declarations
    'declaration-property-max-values': null,
    // Limit the depth of nesting
    'max-nesting-depth': 2,
    // Limit the number of decimal places allowed in numbers
    'number-max-precision': null,
    // Limit the number of attribute selectors in a selector
    'selector-max-attribute': null,
    // Limit the number of classes in a selector
    'selector-max-class': null,
    // Limit the number of combinators in a selector
    'selector-max-combinators': null,
    // Limit the number of compound selectors in a selector
    'selector-max-compound-selectors': 3,
    // Limit the number of id selectors in a selector
    'selector-max-id': 0,
    // Limit the number of pseudo-classes in a selector
    'selector-max-pseudo-class': null,
    // Limit the specificity of selectors
    'selector-max-specificity': '0,3,1',
    // Limit the number of type in a selector
    'selector-max-type': null,
    // Limit the number of universal selectors in a selector
    'selector-max-universal': null,
    // Specify the minimum number of milliseconds for time values
    'time-min-milliseconds': 100
  }
};
