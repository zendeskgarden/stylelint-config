'use strict';

module.exports = {
  'rules': {
    // Require or disallow an empty line before @rules
    'at-rule-empty-line-before': [2, 'always', {
      except: ['blockless-group', 'all-nested'],
      ignore: ['after-comment']
    }],
    // Disallow vendor prefixes for @rules
    'at-rule-no-vendor-prefix': 2
  }
};
