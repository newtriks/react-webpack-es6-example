'use strict';

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');

var DEBUG = true;

var port = JSON.parse(process.env.npm_package_config_port || 3000),
  subdomain = JSON.parse(process.env.npm_package_config_subdomain),
  url = subdomain ?
  'https://' + subdomain + '.localtunnel.me' :
  'http://localhost:' + port;

module.exports = {

  entry: [
    'webpack-dev-server/client?' + url,
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },

  cache: DEBUG,
  debug: DEBUG,
  stats: {
    colors: true,
    reasons: DEBUG
  },
  devtool: DEBUG ? '#inline-source-map' : false,

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {

    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader?experimental']
    }, {
      test: /\.jpg/,
      loader: 'url-loader?limit=10000&mimetype=image/jpg'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader!cssnext-loader"
    }]

  },

  postcss: [autoprefixer, csswring],

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
