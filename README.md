# Zendesk Garden stylelint Config [![Build Status](https://travis-ci.com/zendeskgarden/stylelint-config.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/stylelint-config)

The `garden-stylelint-config` package exposes a shareable [stylelint
config](http://stylelint.io/?%2Fdocs%2Fuser-guide%2Fconfiguration.md).

## Installation

    npm install --save-dev stylelint
    npm install --save-dev stylelint-order
    npm install --save-dev @zendesk/garden-stylelint-config

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Add a `.stylelintrc` to your project with an `extends` property like this:

```json
{
  "extends": "@zendesk/garden-stylelint-config"
}
```

Now the Zendesk Garden rules will apply to your project. See the [stylelint
Documentation](http://stylelint.io/?%2Fdocs%2Fuser-guide%2Fconfiguration.md)
for more details on extending shareable configuration files.

## Contributing

See [LANDSCAPE
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Contributing).
