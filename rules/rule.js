'use strict';

var fs = require('fs');
var path = require('path');
var data = path.join(__dirname, '../data/properties-order-concentric.txt');
var rulePropertiesOrder = fs.readFileSync(data).toString().split('\n');

module.exports = {
  'rules': {
    // Require or disallow an empty line before nested rules
    'rule-nested-empty-line-before': [2, 'always', {
      'except': ['first-nested'],
      'ignore': ['after-comment']
    }],
    // Disallow duplicate properties within rules
    'rule-no-duplicate-properties': 2,
    // Disallow shorthand properties that override related longhand properties
    'rule-no-shorthand-property-overrides': 2,
    // Disallow single-line rules
    'rule-no-single-line': 0,
    // Require or disallow an empty line before non-nested rules
    'rule-non-nested-empty-line-before': [2, 'always', {
      'ignore': ['after-comment']
    }],
    // Specify the order of properties within rules
    // https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/concentric.txt
    'rule-properties-order': [2, rulePropertiesOrder],
    // Require or disallow a trailing semicolon within rules
    'rule-trailing-semicolon': [2, 'always']
  }
};
