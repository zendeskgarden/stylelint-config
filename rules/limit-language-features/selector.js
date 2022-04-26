/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify a list of disallowed attribute names
    'selector-attribute-name-disallowed-list': null,
    // Specify a list of disallowed attribute operators
    'selector-attribute-operator-disallowed-list': null,
    // Specify a list of allowed attribute operators
    'selector-attribute-operator-allowed-list': null,
    // Specify a pattern for class selectors
    'selector-class-pattern': null,
    // Specify a list of disallowed combinators
    'selector-combinator-disallowed-list': null,
    // Specify a list of allowed combinators
    'selector-combinator-allowed-list': null,
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
    // Specify simple or complex notation for :not() pseudo-classes (Autofixable)
    'selector-not-notation': ['simple'],
    // Specify a list of disallowed pseudo-class selectors
    'selector-pseudo-class-disallowed-list': null,
    // Specify a list of allowed pseudo-class selectors
    'selector-pseudo-class-allowed-list': null,
    // Specify a list of disallowed pseudo-element selectors
    'selector-pseudo-element-disallowed-list': null,
    // Specify a list of allowed pseudo-element selectors
    'selector-pseudo-element-allowed-list': null
  }
};
