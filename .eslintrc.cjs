module.exports = {
  extends: ['@bjerk/eslint-config', '@sanity/eslint-config-studio'],
  overrides: [
    {
      files: ['sanity.*.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
