/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  extends: [
    './rules/avoid-errors/descending',
    './rules/avoid-errors/duplicate',
    './rules/avoid-errors/empty',
    './rules/avoid-errors/invalid',
    './rules/avoid-errors/irregular',
    './rules/avoid-errors/missing',
    './rules/avoid-errors/non-standard',
    './rules/avoid-errors/overrides',
    './rules/avoid-errors/unknown',
    './rules/avoid-errors/unmatchable',
    './rules/enforce-conventions/allowed-disallowed-required',
    './rules/enforce-conventions/case',
    './rules/enforce-conventions/empty-lines',
    './rules/enforce-conventions/max-min',
    './rules/enforce-conventions/notation',
    './rules/enforce-conventions/pattern',
    './rules/enforce-conventions/quotes',
    './rules/enforce-conventions/redundant',
    './rules/enforce-conventions/whitespace-inside',
    './plugins/stylelint-order'
  ],
  reportNeedlessDisables: true
};
