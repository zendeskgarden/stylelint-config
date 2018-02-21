# Garden stylelint Config [![Build Status](https://travis-ci.com/zendeskgarden/stylelint-config.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/stylelint-config)

> :seedling: Garden is a design system for Zendesk

This package exposes a shareable [stylelint
config](http://stylelint.io/?%2Fdocs%2Fuser-guide%2Fconfiguration.md).

## Installation

```sh
npm install --save-dev stylelint stylelint-order @zendesk/garden-stylelint-config
```

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Add a `.stylelintrc` to your project with an `extends` property like this:

```js
{
  "extends": "@zendesk/garden-stylelint-config"
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
[contributing](https://github.com/zendeskgarden/stylelint-config/blob/master/.github/CONTRIBUTING.md)
documentation for details needed to submit a PR.

Community behavior is benevolently ruled by a [code of
conduct](https://github.com/zendeskgarden/stylelint-config/blob/master/.github/CODE_OF_CONDUCT.md).
Please participate accordingly.

## License

Copyright 2018 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
