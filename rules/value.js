'use strict';

module.exports = {
  'rules': {
    // Specify lowercase or uppercase for keywords values
    'value-keyword-case': ['lower', { 'ignoreKeywords': ['/^U\+.+$/'] }],
    // Disallow vendor prefixes for values
    'value-no-vendor-prefix': true
  }
};
