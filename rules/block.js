'use strict';

module.exports = {
  'rules': {
    // Require a newline or disallow whitespace after the closing brace of blocks
    'block-closing-brace-newline-after': [2, 'always'],
    // Require a newline or disallow whitespace before the closing brace of blocks
    'block-closing-brace-newline-before': [2, 'always-multi-line'],
    // Require a single space or disallow whitespace after the closing brace of blocks
    'block-closing-brace-space-after': 0,
    // Require a single space or disallow whitespace before the closing brace of blocks
    'block-closing-brace-space-before': [2, 'always-single-line'],
    // Disallow empty blocks
    'block-no-empty': 2,
    // Require a newline after the opening brace of blocks
    'block-opening-brace-newline-after': [2, 'always-multi-line'],
    // Require a newline or disallow whitespace before the opening brace of blocks
    'block-opening-brace-newline-before': 0,
    // Require a single space or disallow whitespace after the opening brace of blocks
    'block-opening-brace-space-after': [2, 'always-single-line'],
    // Require a single space or disallow whitespace before the opening brace of blocks
    'block-opening-brace-space-before': [2, 'always']
  }
};
