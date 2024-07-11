/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // Require or disallow an empty line before @rules
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless', 'inside-block'],
        ignore: ['after-comment'],
        ignoreAtRules: ['custom-selector']
      }
    ],
    // Require or disallow an empty line before comments
    'comment-empty-line-before': null,
    // Require or disallow an empty line before custom properties
    'custom-property-empty-line-before': 'never',
    // Require or disallow an empty line before declarations
    'declaration-empty-line-before': 'never',
    // Require or disallow an empty line before rules
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ]
  }
};
