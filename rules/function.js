'use strict';

module.exports = {
  'rules': {
    // Specify a blacklist of disallowed functions
    'function-blacklist': null,
    // Disallow an unspaced operator within `calc` functions
    'function-calc-no-unspaced-operator': true,
    // Require a newline or disallow whitespace after the commas of functions
    'function-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of functions
    'function-comma-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the commas of functions
    'function-comma-space-after': 'always',
    // Require a single space or disallow whitespace before the commas of functions
    'function-comma-space-before': 'never',
    // Disallow direction values in `linear-gradient()` calls that are not valid according to the standard syntax
    'function-linear-gradient-no-nonstandard-direction': true,
    // Require a newline or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-newline-inside': 'never-multi-line',
    // Require a single space or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-space-inside': 'never',
    // Specify single, double or no quotes for urls
    'function-url-quotes': 'single',
    // Specify a whitelist of only allowed functions
    'function-whitelist': null,
    // Require a single space or disallow whitespace after functions
    'function-whitespace-after': 'always'
  }
};
