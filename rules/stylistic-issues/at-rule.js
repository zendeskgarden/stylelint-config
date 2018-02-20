module.exports = {
  rules: {
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
    // Require a newline after the semicolon of at-rules
    'at-rule-semicolon-newline-after': 'always',
    // Require a single space or disallow whitespace before the semicolons of at rules
    'at-rule-semicolon-space-before': 'never'
  }
};
