'use strict';

module.exports = {
  'rules': {
    // Disallow unknown properties
    'property-no-unknown': [true, {
      ignoreProperties: ['composes']
    }],
  }
};
