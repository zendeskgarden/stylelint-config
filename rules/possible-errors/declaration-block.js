module.exports = {
  rules: {
    // Disallow duplicate properties within declaration blocks
    'declaration-block-no-duplicate-properties': [true, {
      ignoreProperties: ['composes']
    }],
    // Disallow longhand properties that can be combined into one shorthand property
    'declaration-block-no-redundant-longhand-properties': true,
    // Disallow shorthand properties that override related longhand properties within declaration blocks
    'declaration-block-no-shorthand-property-overrides': true
  }
};
