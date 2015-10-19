'use strict';

module.exports = {
  'rules': {
    // Require a newline or disallow whitespace after the commas of media query lists
    'media-query-list-comma-newline-after': [2, 'always-multi-line'],
    // Require a newline or disallow whitespace before the commas of media query lists
    'media-query-list-comma-newline-before': [2, 'never-multi-line'],
    // Require a single space or disallow whitespace after the commas of media query lists
    'media-query-list-comma-space-after': [2, 'always'],
    // Require a single space or disallow whitespace before the commas of media query lists
    'media-query-list-comma-space-before': [2, 'never']
  }
};
