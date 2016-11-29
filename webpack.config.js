var path = require('path');
var webpack = require('webpack');
var config = {
  entry: [
    path.resolve(__dirname, 'js/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'static/bundle'),
    publicPath: '/static/bundle',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },

      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    contentBase: 'static',
    historyApiFallback: true
  }
};
module.exports = config;
