const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  },
  chainWebpack: config => {
    config.module
      .rule('css')
      .uses.clear(); // Очищаем существующие правила для CSS

    config.module
      .rule('css')
      .test(/\.css$/)
      .use('style-loader')
      .loader('style-loader'); // Добавляем style-loader

    config.module
      .rule('css')
      .use('css-loader')
      .loader('css-loader') // Добавляем css-loader
      .options({
        modules: true, // Если вы используете CSS-модули
        sourceMap: true,
      });

    config.plugins.delete('extract-css'); // Удаляем встроенный экстрактор CSS
  },
};

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
};
