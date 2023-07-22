module.exports = {
  root: true,
  extends: ['@bjerk/eslint-config'],
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
