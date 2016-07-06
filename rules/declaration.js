'use strict';

module.exports = {
  'rules': {
    // Require a single space or disallow whitespace after the bang of declarations
    'declaration-bang-space-after': 'never',
    // Require a single space or disallow whitespace before the bang of declarations
    'declaration-bang-space-before': 'always',
    // Require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': 'always-multi-line',
    // Require a single space or disallow whitespace after the colon of declarations
    'declaration-colon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the colon of declarations
    'declaration-colon-space-before': 'never',
    // Disallow `!important` within declarations
    'declaration-no-important': true,
    // Specify a blacklist of disallowed property and unit pairs within declarations
    'declaration-property-unit-blacklist': null,
    // Specify a whitelist of allowed property and unit pairs within declarations
    'declaration-property-unit-whitelist': null,
    // Specify a blacklist of disallowed property and value pairs within declarations
    'declaration-property-value-blacklist': null,
    // Specify a whitelist of allowed property and value pairs within declarations
    'declaration-property-value-whitelist': null
  }
};
