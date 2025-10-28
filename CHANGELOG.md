# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [23.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v22.0.0...v23.0.0) (2025-10-28)


### ⚠ BREAKING CHANGES

* enables the following new rules...

- `at-rule-no-deprecated`
- `declaration-property-value-keyword-no-deprecated`
- `media-type-no-deprecated`
- `property-no-deprecated`
- `at-rule-prelude-no-invalid`
- `no-invalid-position-declaration`
- `syntax-string-no-invalid`
- `nesting-selector-no-missing-scoping-root`
- `at-rule-descriptor-no-unknown`
- `at-rule-descriptor-value-no-unknown`
- `color-function-alias-notation`
- `block-no-redundant-nested-style-rules`

### Features

* update all non-major dependencies ([#277](https://github.com/zendeskgarden/stylelint-config/issues/277)) ([0fd9966](https://github.com/zendeskgarden/stylelint-config/commit/0fd9966d3c19e47749ac99d4e7a849dacb2120ba))

## [22.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v21.0.0...v22.0.0) (2024-07-11)


### ⚠ BREAKING CHANGES

* **deps:** rule alignment with stylelint 16.4.0 and configured to `reportNeedlessDisables`

* **deps:** update all non-major dependencies ([#265](https://github.com/zendeskgarden/stylelint-config/issues/265)) ([2de6c97](https://github.com/zendeskgarden/stylelint-config/commit/2de6c97f0d22926d3d2aa22782b471ec17e52344))

## [21.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v20.0.0...v21.0.0) (2024-01-19)


### ⚠ BREAKING CHANGES

* **deps:** requires `stylelint-order@^6.1.0` peer dependency

- add `lightness-notation` rule

* **deps:** update all non-major dependencies ([#254](https://github.com/zendeskgarden/stylelint-config/issues/254)) ([4c521ef](https://github.com/zendeskgarden/stylelint-config/commit/4c521ef9c6308ade13cca4d46274c1a3c3022813))

## [20.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v19.0.0...v20.0.0) (2023-07-17)


### ⚠ BREAKING CHANGES

* **deps:** requires `stylelint-order@^6.0.0` peer dependency
* **deps:** remove deprecated rules.

Added:
- `import-notation`
- `media-feature-name-allowed-list`
- `media-feature-name-unit-allowed-list`
- `media-feature-range-notation`
- `no-unknown-custom-properties`
- `annotation-no-unknown`
- `declaration-property-value-no-unknown`
- `keyframe-block-no-duplicate-selectors`
- `keyframe-selector-notation`
- `media-query-no-invalid`
- `no-unknown-animations`
- `selector-anb-no-unmatchable`
- `media-feature-name-no-unknown`
- `media-feature-name-value-no-unknown`

* **deps:** update dependency stylelint to v15 ([#243](https://github.com/zendeskgarden/stylelint-config/issues/243)) ([fa45061](https://github.com/zendeskgarden/stylelint-config/commit/fa45061aba1b0cc368e7ddb4df1f2ecd216c5e0c))
* **deps:** update dependency stylelint-order to v6 ([#244](https://github.com/zendeskgarden/stylelint-config/issues/244)) ([9e081b9](https://github.com/zendeskgarden/stylelint-config/commit/9e081b94c9245a16a0bb4e78d10f7c7491c51fcb))

## [19.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v18.0.0...v19.0.0) (2022-04-26)


### ⚠ BREAKING CHANGES

* **stylelint:** add declaration-property-max-values and selector-not-notation rules

- Add `declaration-property-max-values`
- Add `selector-not-notation`

### Features

* **stylelint:** add declaration-property-max-values and selector-not-notation rules ([7a4626a](https://github.com/zendeskgarden/stylelint-config/commit/7a4626a190a7b66c9ec91a435449976f053654fa))

## [18.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v17.0.0...v18.0.0) (2022-03-04)


### ⚠ BREAKING CHANGES

* **deps:** update to eslint v8.10.0 and stylelint v14.5.3

- Added `function-no-unknown` rule
- Added `font-family-name-quotes` rule

* **deps:** update all non-major dependencies ([#232](https://github.com/zendeskgarden/stylelint-config/issues/232)) ([7038f49](https://github.com/zendeskgarden/stylelint-config/commit/7038f4934eb632e56b2a8ea852bac84ba5acef92))

## [17.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v16.0.1...v17.0.0) (2021-11-05)


### ⚠ BREAKING CHANGES

* **deps:** update to stylelint v14.0.0 and stylelint-order v5.0.0

- Add `color-hex-alpha`
- Add `custom-property-no-missing-var-function`
- Remove `function-calc-no-invalid`

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update dependency stylelint to v14 ([#221](https://github.com/zendeskgarden/stylelint-config/issues/221)) ([65b1a7a](https://github.com/zendeskgarden/stylelint-config/commit/65b1a7a056ffd7374a47f4939cb86523ff7683d2))

### [16.0.1](https://github.com/zendeskgarden/stylelint-config/compare/v16.0.0...v16.0.1) (2021-03-30)


### Bug Fixes

* prevent husky from running on postinstall ([#193](https://github.com/zendeskgarden/stylelint-config/issues/193)) ([a5e794d](https://github.com/zendeskgarden/stylelint-config/commit/a5e794d7fea5e8c5cc6b304fc3acfb7a3bcd163d))

## [16.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v15.0.0...v16.0.0) (2021-03-10)


### ⚠ BREAKING CHANGES

* **deps:** stylelint v13.12.0 peer dependency

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update all non-major dependencies ([#191](https://github.com/zendeskgarden/stylelint-config/issues/191)) ([d11a027](https://github.com/zendeskgarden/stylelint-config/commit/d11a027f591bafb2e56db830cbb16021f521bcfa))

## [15.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v14.0.0...v15.0.0) (2020-11-30)

## [14.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v13.0.0...v14.0.0) (2020-09-02)


### ⚠ BREAKING CHANGES

* **deps:** deprecated `*-blacklist`, `*-requirelist` and `*-whitelist` rules in favor of the new `*-disallowed-list`, `*-required-list` and `*-allowed-list` ones

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: hzhu <hz@henryzhu.me>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update all non-major dependencies ([#171](https://github.com/zendeskgarden/stylelint-config/issues/171)) ([588d362](https://github.com/zendeskgarden/stylelint-config/commit/588d362e590ef6a361cb692033c387a69e89a2b0))

## [13.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v12.0.1...v13.0.0) (2020-05-20)


### ⚠ BREAKING CHANGES

* **deps:** update dependency stylelint to v13.5.0 (#151)

### Bug Fixes

* use default CircleCI node_modules cache ([#139](https://github.com/zendeskgarden/stylelint-config/issues/139)) ([5d31027](https://github.com/zendeskgarden/stylelint-config/commit/5d31027114749c094037115f3f919bfb863413c0))


* **deps:** update dependency stylelint to v13.5.0 ([#151](https://github.com/zendeskgarden/stylelint-config/issues/151)) ([07e9921](https://github.com/zendeskgarden/stylelint-config/commit/07e9921f187c9e9d89811e244b410eabcee4f20e))

### [12.0.1](https://github.com/zendeskgarden/stylelint-config/compare/v12.0.0...v12.0.1) (2020-01-13)

## [12.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v11.0.0...v12.0.0) (2019-11-18)


### ⚠ BREAKING CHANGES

* **deps:** stylelint v12 peer dependency

* **deps:** update dependency stylelint to v12 ([#121](https://github.com/zendeskgarden/stylelint-config/issues/121)) ([2a89213](https://github.com/zendeskgarden/stylelint-config/commit/2a892131f478b33189124d6df6b52c9fdcb64a26))

## [11.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v10.0.0...v11.0.0) (2019-09-17)


### ⚠ BREAKING CHANGES

* **deps:** add new `unicode-bom` rule which requires stylelint v11.

* **deps:** update dependency stylelint to v11 ([#113](https://github.com/zendeskgarden/stylelint-config/issues/113)) ([76633d5](https://github.com/zendeskgarden/stylelint-config/commit/76633d5))

# [10.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v9.2.0...v10.0.0) (2019-04-23)


### chore

* **deps:** update dependency stylelint-order to v3 ([#79](https://github.com/zendeskgarden/stylelint-config/issues/79)) ([eca2656](https://github.com/zendeskgarden/stylelint-config/commit/eca2656))


### BREAKING CHANGES

* **deps:** stylelint ^10.0.0 is now required.



# [9.2.0](https://github.com/zendeskgarden/stylelint-config/compare/v9.1.0...v9.2.0) (2019-04-16)


### Features

* update dependency stylelint to v10 ([#78](https://github.com/zendeskgarden/stylelint-config/issues/78)) ([f32c0c4](https://github.com/zendeskgarden/stylelint-config/commit/f32c0c4))



<a name="9.1.0"></a>
# [9.1.0](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.9...v9.1.0) (2019-01-23)


### Features

* upgrade to support stylelint 9.10.x ([#61](https://github.com/zendeskgarden/stylelint-config/issues/61)) ([1ee5f33](https://github.com/zendeskgarden/stylelint-config/commit/1ee5f33))



<a name="9.0.9"></a>
## [9.0.9](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.8...v9.0.9) (2018-11-30)



<a name="9.0.8"></a>
## [9.0.8](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.7...v9.0.8) (2018-11-14)



<a name="9.0.7"></a>
## [9.0.7](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.6...v9.0.7) (2018-10-30)



<a name="9.0.6"></a>
## [9.0.6](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.5...v9.0.6) (2018-10-16)


### Bug Fixes

* update peerDependencies with stylelint 9.6.x ([#44](https://github.com/zendeskgarden/stylelint-config/issues/44)) ([191b8d2](https://github.com/zendeskgarden/stylelint-config/commit/191b8d2))



<a name="9.0.5"></a>
## [9.0.5](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.4...v9.0.5) (2018-09-04)



<a name="9.0.4"></a>
## [9.0.4](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.3...v9.0.4) (2018-08-21)



<a name="9.0.3"></a>
## [9.0.3](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.2...v9.0.3) (2018-08-14)



<a name="9.0.2"></a>
## [9.0.2](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.1...v9.0.2) (2018-08-13)



<a name="9.0.1"></a>
## [9.0.1](https://github.com/zendeskgarden/stylelint-config/compare/v9.0.0...v9.0.1) (2018-08-06)



<a name="9.0.0"></a>
# [9.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v8.1.1...v9.0.0) (2018-08-06)


### Features

* upgrade to support stylelint 9.4.x ([#19](https://github.com/zendeskgarden/stylelint-config/issues/19)) ([f898410](https://github.com/zendeskgarden/stylelint-config/commit/f898410))


### BREAKING CHANGES

* existing CSS linting will fail if:
* keyframe names don't start with `zd-`.
* non-Unix linebreaks are used.



<a name="8.1.1"></a>
## [8.1.1](https://github.com/zendeskgarden/stylelint-config/compare/v8.1.0...v8.1.1) (2018-06-12)


### Bug Fixes

* disable `selector-max-pseudo-class` rule ([#17](https://github.com/zendeskgarden/stylelint-config/issues/17)) ([d386505](https://github.com/zendeskgarden/stylelint-config/commit/d386505))



<a name="8.1.0"></a>
# [8.1.0](https://github.com/zendeskgarden/stylelint-config/compare/v8.0.2...v8.1.0) (2018-06-12)


### Features

* update to support stylelint 9.2.1 ([#16](https://github.com/zendeskgarden/stylelint-config/issues/16)) ([94188d7](https://github.com/zendeskgarden/stylelint-config/commit/94188d7))



<a name="8.0.2"></a>
## [8.0.2](https://github.com/zendeskgarden/stylelint-config/compare/v8.0.1...v8.0.2) (2018-03-21)


### Bug Fixes

* improve package metadata ([#15](https://github.com/zendeskgarden/stylelint-config/issues/15)) ([e89d482](https://github.com/zendeskgarden/stylelint-config/commit/e89d482))



<a name="8.0.1"></a>
## [8.0.1](https://github.com/zendeskgarden/stylelint-config/compare/v8.0.0...v8.0.1) (2018-03-19)


### Bug Fixes

* remove "package registry" docs from README ([#14](https://github.com/zendeskgarden/stylelint-config/issues/14)) ([87bbb59](https://github.com/zendeskgarden/stylelint-config/commit/87bbb59))



<a name="8.0.0"></a>
# [8.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v7.0.0...v8.0.0) (2018-03-19)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#13](https://github.com/zendeskgarden/stylelint-config/issues/13)) ([caaaaac](https://github.com/zendeskgarden/stylelint-config/commit/caaaaac))


### BREAKING CHANGES

* package location has moved to the npm registry under `@zendeskgarden/stylelint-config`. See the README for installation/upgrade details.



<a name="7.0.0"></a>
# [7.0.0](https://github.com/zendeskgarden/stylelint-config/compare/v6.0.0...v7.0.0) (2018-02-21)


### Features

* upgrade to support stylelint 9.x ([#11](https://github.com/zendeskgarden/stylelint-config/issues/11)) ([10ca8e3](https://github.com/zendeskgarden/stylelint-config/commit/10ca8e3))


### BREAKING CHANGES

* upgraded to extend stylelint 9.1.x and stylelint-order 0.8.x.



<a name="6.0.0"></a>
## [6.0.0] - 2017-11-16
### Changed (per [#10](https://github.com/zendeskgarden/stylelint-config/pull/10))
- Upgraded to extend stylelint 8.2.x and stylelint-order 0.7.x.

## [5.1.0] - 2017-07-10
### Changed (per [#9](https://github.com/zendeskgarden/stylelint-config/pull/9))
- Upgraded to extend stylelint 7.12.x and stylelint-order 0.5.x.

## [5.0.0] - 2017-05-26
### Changed (per [#8](https://github.com/zendeskgarden/stylelint-config/pull/8))
- Prepared package for registry publish as
  `@zendesk/garden-stylelint-config`. See README for updated
  installation and usage.
- Update `stylelint` peer dependency to version 7.10.x.
- Update `stylint-order` peer dependency to version 0.4.x.

## [4.1.0] - 2017-02-21
### Removed (per [#7](https://github.com/zendeskgarden/stylelint-config/pull/7))
- Rules deprecated by stylelint 7.9.x.
- Order of block properties now handled by `stylelint-order` package.

## [4.0.0] - 2016-09-15
### Changed (per [#6](https://github.com/zendeskgarden/stylelint-config/pull/6))
- Upgraded to extend stylelint 7.x.

## [3.0.0] - 2016-07-06
### Changed (per [#5](https://github.com/zendeskgarden/stylelint-config/pull/5))
- Upgraded to extend stylelint 6.x.

## [2.0.0] - 2016-03-23
### Changed (per [#4](https://github.com/zendeskgarden/stylelint-config/pull/4))
- Upgraded to extend stylelint 5.x.

## [1.0.0] - 2015-12-16
### Changed (per [#1](https://github.com/zendeskgarden/stylelint-config/pull/1))
- Upgraded to extend stylelint 3.x.

## 0.1.0 - 2015-10-19

[6.0.0]: https://github.com/zendeskgarden/stylelint-config/compare/v5.1.0...v6.0.0
[5.1.0]: https://github.com/zendeskgarden/stylelint-config/compare/v5.0.0...v5.1.0
[5.0.0]: https://github.com/zendeskgarden/stylelint-config/compare/4.1.0...v5.0.0
[4.1.0]: https://github.com/zendeskgarden/stylelint-config/compare/4.0.0...4.1.0
[4.0.0]: https://github.com/zendeskgarden/stylelint-config/compare/3.0.0...4.0.0
[3.0.0]: https://github.com/zendeskgarden/stylelint-config/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/zendeskgarden/stylelint-config/compare/1.0.0...2.0.0
[1.0.0]: https://github.com/zendeskgarden/stylelint-config/compare/0.1.0...1.0.0
