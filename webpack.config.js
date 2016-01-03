var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
	  'webpack/hot/dev-server', 
	  path.resolve(__dirname, 'app/main.js')
  ],
  output: {
	  path: path.resolve(__dirname, 'build'),
	  filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ]
  }
};
