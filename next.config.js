const path = require('path');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSass(
  withSourceMaps(withImages({
    cssModules: false,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    webpack(config, options) {
      config.devtool = 'source-map';
      config.module.rules.push(
        {
          test: /\.(woff(2)?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader',
        },
        {
          enforce: 'pre',
          test: /.scss$/,
          loader: 'sass-resources-loader',
          options: {
            resources: ['./src/styles/_abstracts.scss', './src/styles/_index.scss'],
          },
        },
        // {
        //   test: /\.svg$/,
        //   include: path.resolve(__dirname, '/icons/icons-sprite.svg'),
        //   loader: 'svg-sprite-loader',
        // },
      );

      return config;
    },
  }),
));
