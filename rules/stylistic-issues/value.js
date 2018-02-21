module.exports = {
  rules: {
    // Specify lowercase or uppercase for keywords values
    'value-keyword-case': ['lower', {
      ignoreKeywords: ['/^U\+.+$/'] // eslint-disable-line no-useless-escape
    }]
  }
};
