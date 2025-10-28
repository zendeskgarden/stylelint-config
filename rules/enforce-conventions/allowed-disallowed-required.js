/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    /* At-rule */

    // Specify a list of allowed at-rules
    'at-rule-allowed-list': null,
    // Specify a list of disallowed at-rules
    'at-rule-disallowed-list': null,
    // Disallow vendor prefixes for @rules
    'at-rule-no-vendor-prefix': true,
    // Specify a required list of properties for an at-rule
    'at-rule-property-required-list': null,

    /* Color */

    // Require or disallow alpha channel for hex colors
    'color-hex-alpha': null,
    // Require (where possible) or disallow named colors
    'color-named': 'never',
    // Disallow hex colors
    'color-no-hex': null,

    /* Comment */

    // Specify a list of disallowed words within comments
    'comment-word-disallowed-list': null,

    /* Declaration */

    // Disallow `!important` within declarations
    'declaration-no-important': true,
    // Specify a list of allowed property and unit pairs within declarations
    'declaration-property-unit-allowed-list': null,
    // Specify a list of disallowed property and unit pairs within declarations
    'declaration-property-unit-disallowed-list': null,
    // Specify a list of allowed property and value pairs within declarations
    'declaration-property-value-allowed-list': null,
    // Specify a list of disallowed property and value pairs within declarations
    'declaration-property-value-disallowed-list': null,

    /* Function */

    // Specify a list of only allowed functions
    'function-allowed-list': null,
    // Specify a list of disallowed functions
    'function-disallowed-list': null,
    // Disallow scheme-relative urls
    'function-url-no-scheme-relative': null,
    // Specify a list of allowed url schemes
    'function-url-scheme-allowed-list': ['data', '/^http/'],
    // Specify a list of disallowed url schemes
    'function-url-scheme-disallowed-list': null,

    /* Length */

    // Disallow units for zero lengths
    'length-zero-no-unit': true,

    /* Media feature */

    // Specify a list of allowed media feature names
    'media-feature-name-allowed-list': null,
    // Specify a list of disallowed media feature names
    'media-feature-name-disallowed-list': null,
    // Disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,
    // Specify a list of allowed name and unit pairs within media features
    'media-feature-name-unit-allowed-list': null,
    // Specify a list of allowed media feature name and value pairs
    'media-feature-name-value-allowed-list': null,

    /* Property */

    // Specify a list of allowed properties
    'property-allowed-list': null,
    // Specify a list of disallowed properties
    'property-disallowed-list': null,
    // Disallow vendor prefixes for properties
    'property-no-vendor-prefix': true,

    /* Rule */

    // Require rules to be nested in specific at-rules
    'rule-nesting-at-rule-required-list': null,
    // Specify a list of disallowed properties for selectors within rules
    'rule-selector-property-disallowed-list': null,

    /* Selector */

    // Specify a list of disallowed attribute names
    'selector-attribute-name-disallowed-list': null,
    // Specify a list of allowed attribute operators
    'selector-attribute-operator-allowed-list': null,
    // Specify a list of disallowed attribute operators
    'selector-attribute-operator-disallowed-list': null,
    // Specify a list of allowed combinators
    'selector-combinator-allowed-list': null,
    // Specify a list of disallowed combinators
    'selector-combinator-disallowed-list': null,
    // Specify a list of disallowed selectors
    'selector-disallowed-list': null,
    // Disallow qualifying a selector by type
    'selector-no-qualifying-type': [true, { ignore: 'class' }],
    // Disallow vendor prefixes for selectors
    'selector-no-vendor-prefix': true,
    // Specify a list of allowed pseudo-class selectors
    'selector-pseudo-class-allowed-list': null,
    // Specify a list of disallowed pseudo-class selectors
    'selector-pseudo-class-disallowed-list': null,
    // Specify a list of allowed pseudo-element selectors
    'selector-pseudo-element-allowed-list': null,
    // Specify a list of disallowed pseudo-element selectors
    'selector-pseudo-element-disallowed-list': null,

    /* Unit */

    // Specify a list of allowed units
    'unit-allowed-list': null,
    // Specify a list of disallowed units
    'unit-disallowed-list': null,

    /* Value */

    // Disallow vendor prefixes for values
    'value-no-vendor-prefix': true
  }
};
