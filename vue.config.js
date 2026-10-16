const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  transpileDependencies: true,
  chainWebpack: config => {
    // Remove the default index.html plugin
    config.plugins.delete('html');

    // Add a clean one using your public/index.html
    config.plugin('html').use(HtmlWebpackPlugin, [{
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    }]);
  }
};