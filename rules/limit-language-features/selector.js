/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify a blacklist of disallowed attribute operators
    'selector-attribute-operator-blacklist': null,
    // Specify a whitelist of allowed attribute operators
    'selector-attribute-operator-whitelist': null,
    // Specify a pattern for class selectors
    'selector-class-pattern': null,
    // Specify a blacklist of disallowed combinators
    'selector-combinator-blacklist': null,
    // Specify a whitelist of allowed combinators
    'selector-combinator-whitelist': null,
    // Specify a pattern for id selectors
    'selector-id-pattern': null,
    // Limit the number of attribute selectors in a selector
    'selector-max-attribute': null,
    // Limit the number of classes in a selector
    'selector-max-class': null,
    // Limit the number of combinators in a selector
    'selector-max-combinators': null,
    // Limit the number of compound selectors in a selector
    'selector-max-compound-selectors': 3,
    // Limit the number of adjacent empty lines within selectors
    'selector-max-empty-lines': 0,
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
    // Specify a pattern for the selectors of rules nested within rules
    'selector-nested-pattern': null,
    // Disallow qualifying a selector by type
    'selector-no-qualifying-type': [true, { ignore: 'class' }],
    // Disallow vendor prefixes for selectors
    'selector-no-vendor-prefix': true,
    // Specify a blacklist of disallowed pseudo-class selectors
    'selector-pseudo-class-blacklist': null,
    // Specify a whitelist of allowed pseudo-class selectors
    'selector-pseudo-class-whitelist': null,
    // Specify a blacklist of disallowed pseudo-element selectors
    'selector-pseudo-element-blacklist': null,
    // Specify a whitelist of allowed pseudo-element selectors
    'selector-pseudo-element-whitelist': null
  }
};
