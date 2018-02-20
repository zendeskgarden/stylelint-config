module.exports = {
  rules: {
    // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors
    'selector-attribute-brackets-space-inside': 'never',
    // Require a single space or disallow whitespace after operators within attribute selectors
    'selector-attribute-operator-space-after': 'never',
    // Require a single space or disallow whitespace before operators within attribute selectors
    'selector-attribute-operator-space-before': 'never',
    // Require or disallow quotes for attribute values
    'selector-attribute-quotes': 'always',
    // Require a single space or disallow whitespace after the combinators of selectors
    'selector-combinator-space-after': 'always',
    // Require a single space or disallow whitespace before the combinators of selectors
    'selector-combinator-space-before': 'always',
    // Disallow non-space characters for descendant combinators of selectors
    'selector-descendant-combinator-no-non-space': true,
    // Specify lowercase or uppercase for pseudo-class selectors
    'selector-pseudo-class-case': 'lower',
    // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // Specify lowercase or uppercase for pseudo-element selectors
    'selector-pseudo-element-case': 'lower',
    // Specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': null,
    // Specify lowercase or uppercase for type selector
    'selector-type-case': 'lower'
  }
};
