'use strict';

module.exports = {
  'rules': {
    // Disallow duplicate properties within declaration blocks
    'declaration-block-no-duplicate-properties': true,
    // Disallow longhand properties that can be combined into one shorthand property
    'declaration-block-no-redundant-longhand-properties': true,
    // Disallow shorthand properties that override related longhand properties within declaration blocks
    'declaration-block-no-shorthand-property-overrides': true,
    // Require a newline or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-space-before': 'never',
    // Limit the number of declaration within a single line declaration block
    'declaration-block-single-line-max-declarations': 1,
    // Require or disallow a trailing semicolon within declaration blocks
    'declaration-block-trailing-semicolon': 'always'
  }
};
