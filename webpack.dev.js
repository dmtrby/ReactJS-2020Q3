const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'main-dev.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 8000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
};
