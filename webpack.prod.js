const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
   mode: 'production',
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'prod' ),
      filename: 'main.js',
   },
   devtool: 'source-map',
   devServer: {
    contentBase: path.join(__dirname, 'prod'),
    compress: true,
    port: 9000,
    open: true
   },
   performance: {
    hints: false,
  },
   optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    }
  },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         },
         {
          test: /\.html$/,
          exclude: /node_modules/,
          use: 'html-loader',
        }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html',
         minify: {
           removeComments: true,
           collapseWhitespace: true,
         }
      })
   ]
};