'use strict';

module.exports = {
  'rules': {
    // Disallow an unspaced operator within `calc` functions
    'function-calc-no-unspaced-operator': 2,
    // Require a newline or disallow whitespace after the commas of functions
    'function-comma-newline-after': [2, 'always-multi-line'],
    // Require a newline or disallow whitespace before the commas of functions
    'function-comma-newline-before': [2, 'never-multi-line'],
    // Require a single space or disallow whitespace after the commas of functions
    'function-comma-space-after': [2, 'always'],
    // Require a single space or disallow whitespace before the commas of functions
    'function-comma-space-before': [2, 'never'],
    // Disallow direction values in `linear-gradient()` calls that are not valid according to the standard syntax
    'function-linear-gradient-no-nonstandard-direction': 2,
    // Require a single space or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-space-inside': [2, 'never'],
    // Require a single space or disallow whitespace after functions
    'function-space-after': [2, 'always'],
    // Specify single, double or no quotes for urls
    'function-url-quotes': [2, 'single']
  }
};
