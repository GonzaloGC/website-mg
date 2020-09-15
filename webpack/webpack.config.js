const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');

module.exports = {
  entry:'./src/app.js',

  output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/bundle.js'
  },

 /*  devServer:{
    port: 9000
  }, */

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
        MiniCssExtractPlugin.loader,
        'css-loader', 
        'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpeg|svg|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options:{
              name: '[name].[ext]',
              outputPath: 'static/img/',
              useRelativePath: true,
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: true,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        },
      }
    ]
  },

  plugins:[
    new HtmlWebpackPlugin ({
        template: './src/index.hbs',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
    }),
    new MiniCssExtractPlugin({
        filename: 'css/main.css',
    }),
  ]
};