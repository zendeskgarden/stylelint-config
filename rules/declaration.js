'use strict';

module.exports = {
  'rules': {
    // Require a single space or disallow whitespace after the bang of declarations
    'declaration-bang-space-after': [2, 'never'],
    // Require a single space or disallow whitespace before the bang of declarations
    'declaration-bang-space-before': [2, 'always'],
    // Require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': [2, 'always-multi-line'],
    // Require a single space or disallow whitespace after the colon of declarations
    'declaration-colon-space-after': [2, 'always-single-line'],
    // Require a single space or disallow whitespace before the colon of declarations
    'declaration-colon-space-before': [2, 'never'],
    // Disallow `!important` within declarations
    'declaration-no-important': 2
  }
};
