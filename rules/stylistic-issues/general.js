/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify indentation
    'indentation': 2,
    // Specify unix or windows linebreaks
    'linebreaks': 'unix',
    // Disallow more than a specified number of adjacent empty lines
    'max-empty-lines': 1,
    // Limit the length of a line
    'max-line-length': [80, {
      ignorePattern: ['/--zd-.+/']
    }],
    // Disallow empty first lines
    'no-empty-first-line': true,
    // Disallow end-of-line whitespace
    'no-eol-whitespace': true,
    // Disallow missing end-of-source newline
    'no-missing-end-of-source-newline': true,
    // Require or disallow Unicode BOM
    'unicode-bom': 'never'
  }
};
