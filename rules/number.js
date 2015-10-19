'use strict';

module.exports = {
  'rules': {
    // Require or disallow a leading zero for fractional numbers less than 1
    'number-leading-zero': [2, 'never'],
    // Limit the number of decimal places allowed in numbers
    'number-max-precision': 0,
    // Disallow trailing zeros within numbers
    'number-no-trailing-zeros': 2,
    // Disallow units for zero lengths
    'number-zero-length-no-unit': 2
  }
};
