'use strict';

module.exports = {
  'rules': {
    // Specify a blacklist of disallowed properties
    'property-blacklist': null,
    // Specify lowercase or uppercase for properties
    'property-case': 'lower',
    // Disallow unknown properties
    'property-no-unknown': true, {
      'ignoreProperties': ['composes']
    },
    // Disallow vendor prefixes for properties
    'property-no-vendor-prefix': true,
    // Specify a whitelist of allowed properties
    'property-whitelist': null
  }
};
