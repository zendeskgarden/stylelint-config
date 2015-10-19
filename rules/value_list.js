'use strict';

module.exports = {
  'rules': {
    // Require a newline or disallow whitespace after the commas of value lists
    'value-list-comma-newline-after': [2, 'always-multi-line'],
    // Require a newline or disallow whitespace before the commas of value lists
    'value-list-comma-newline-before': [2, 'never-multi-line'],
    // Require a single space or disallow whitespace after the commas of value lists
    'value-list-comma-space-after': [2, 'always-single-line'],
    // Require a single space or disallow whitespace before the commas of value lists
    'value-list-comma-space-before': [2, 'never']
  }
};
