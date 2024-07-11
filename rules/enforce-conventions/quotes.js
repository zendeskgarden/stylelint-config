/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Specify whether or not quotation marks should be used around font family names
    'font-family-name-quotes': 'always-where-recommended',
    // Require or disallow quotes for urls
    'function-url-quotes': ['always', { except: ['empty'] }],
    // Require or disallow quotes for attribute values
    'selector-attribute-quotes': 'always'
  }
};
