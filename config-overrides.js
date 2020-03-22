const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    plugins: [new TsconfigPathsPlugin()]
  };

  return config;
};
