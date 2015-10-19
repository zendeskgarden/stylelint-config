'use strict';

module.exports = {
  'rules': {
    // Require a newline or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-newline-after': [2, 'always-multi-line'],
    // Require a newline or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-newline-before': [2, 'never-multi-line'],
    // Require a single space or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-space-after': [2, 'always-single-line'],
    // Require a single space or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-space-before': [2, 'never']
  }
};
