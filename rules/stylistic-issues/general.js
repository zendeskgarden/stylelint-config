'use strict';

module.exports = {
  'rules': {
    // Specify indentation
    'indentation': 2,
    // Disallow more than a specified number of adjacent empty lines
    'max-empty-lines': 1,
    // Limit the length of a line
    'max-line-length': [80, {
      ignorePattern: ['/--zd-.+/']
    }],
    // Disallow end-of-line whitespace
    'no-eol-whitespace': true,
    // Disallow missing end-of-source newline
    'no-missing-end-of-source-newline': true
  }
};
