'use strict';

module.exports = {
  'rules': {
    // Require a newline or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-space-before': 'never',
    // Require or disallow a trailing semicolon within declaration blocks
    'declaration-block-trailing-semicolon': 'always'
  }
};
