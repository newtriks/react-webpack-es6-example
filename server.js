var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = process.env.npm_package_config_port || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.output.contentBase,
  stats: {
    colors: true,
    reasons: true
  },
  noInfo: true,
  hot: true
}).listen(port, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
