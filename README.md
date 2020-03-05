# Garden stylelint Config [![npm version](https://img.shields.io/npm/v/@zendeskgarden/stylelint-config.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/stylelint-config) [![Build Status](https://img.shields.io/travis/zendeskgarden/stylelint-config/master.svg?style=flat-square)](https://travis-ci.org/zendeskgarden/stylelint-config) [![Dependency Status](https://img.shields.io/david/dev/zendeskgarden/stylelint-config.svg?style=flat-square)](https://david-dm.org/zendeskgarden/stylelint-config?type=dev)

> :seedling: Garden is a design system for Zendesk

This package exposes a shareable [stylelint
config](http://stylelint.io/?%2Fdocs%2Fuser-guide%2Fconfiguration.md).

## Installation

```sh
npm install --save-dev stylelint stylelint-order @zendeskgarden/stylelint-config
```

## Usage

Add a `.stylelintrc` to your project with an `extends` property like this:

```js
{
  "extends": "@zendeskgarden/stylelint-config"
}
```

Now the Zendesk Garden rules will apply to your project. See the [stylelint
Documentation](http://stylelint.io/?%2Fdocs%2Fuser-guide%2Fconfiguration.md)
for more details on extending shareable configuration files.

## Contribution

Thanks for your interest in Garden! Community involvement helps make our
design system fresh and tasty for everyone.

Got issues with what you find here? Please feel free to create an
[issue](https://github.com/zendeskgarden/stylelint-config/issues/new).

If you'd like to take a crack at making some changes, please follow our
[contributing](.github/CONTRIBUTING.md) documentation for details needed
to submit a PR.

Community behavior is benevolently ruled by a [code of
conduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.

## License

Copyright 2020 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
