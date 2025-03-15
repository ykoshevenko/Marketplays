const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Добавьте этот импорт

module.exports = {
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ]
  }
}