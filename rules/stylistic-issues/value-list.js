'use strict';

module.exports = {
  'rules': {
    // Require a newline or disallow whitespace after the commas of value lists
    'value-list-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of value lists
    'value-list-comma-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the commas of value lists
    'value-list-comma-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the commas of value lists
    'value-list-comma-space-before': 'never',
    // Limit the number of adjacent empty lines within value lists
    'value-list-max-empty-lines': 0
  }
};
