# Zendesk Garden stylelint Config

The `stylelint-config` package exposes a shareable [stylelint
config](http://stylelint.io/?%2Fdocs%2Fuser-guide%2Fconfiguration.md).

## Installation

    $ npm install --save-dev stylelint
    $ npm install --save-dev git+ssh://git@github.com:zendeskgarden/stylelint-config.git

## Usage

Add a `.stylelintrc` to your project with an `extends` property like this:

```json
{
  "extends": "stylelint-config-zendesk"
}
```

Now the Zendesk rules will apply to your project. See the [stylelint
Documentation](http://stylelint.io/?%2Fdocs%2Fuser-guide%2Fconfiguration.md)
for more details on extending shareable configuration files.
