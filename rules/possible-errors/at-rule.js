'use strict';

module.exports = {
  'rules': {
    // Specify a blacklist of disallowed at-rules
    'at-rule-blacklist': null,
    // Require or disallow an empty line before @rules
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-blockless', 'inside-block'],
      ignore: ['after-comment']
    }],
    // Specify lowercase or uppercase for at-rules names
    'at-rule-name-case': 'lower',
    // Require a newline after at-rule names
    'at-rule-name-newline-after': null,
    // Require a single space after at-rule names
    'at-rule-name-space-after': 'always-single-line',
    // Disallow unknown at-rules
    'at-rule-no-unknown': true,
    // Disallow vendor prefixes for @rules
    'at-rule-no-vendor-prefix': true,
    // Require a newline after the semicolon of at-rules
    'at-rule-semicolon-newline-after': 'always',
    // Specify a whitelist of allowed at-rules
    'at-rule-whitelist': null
  }
};
