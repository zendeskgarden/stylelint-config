# Garden stylelint Config [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/stylelint-config
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/stylelint-config
[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/stylelint-config/master?label=build
[build status link]: https://circleci.com/gh/zendeskgarden/stylelint-config/tree/master
[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/stylelint-config?label=dependencies
[dependency status link]: https://david-dm.org/zendeskgarden/stylelint-config?type=dev

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
