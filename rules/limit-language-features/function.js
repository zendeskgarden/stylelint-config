module.exports = {
  rules: {
    // Specify a blacklist of disallowed functions
    'function-blacklist': null,
    // Disallow scheme-relative urls
    'function-url-no-scheme-relative': null,
    // Specify a blacklist of disallowed url schemes
    'function-url-scheme-blacklist': null,
    // Specify a whitelist of allowed url schemes
    'function-url-scheme-whitelist': ['data', '/^http/'],
    // Specify a whitelist of only allowed functions
    'function-whitelist': null
  }
};
