'use strict';

module.exports = {
  'rules': {
    // Require or disallow an empty line before custom properties
    'custom-property-empty-line-before': 'never',
    // Disallow custom properties outside of `:root` selectors
    'custom-property-no-outside-root': true,
    // Specify pattern of custom properties
    'custom-property-pattern': 'zd-.+'
  }
};
