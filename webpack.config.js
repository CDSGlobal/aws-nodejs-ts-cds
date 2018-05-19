const path = require('path');
const slsw = require('serverless-webpack');
var nodeExternals = require('webpack-node-externals');

const entries = {};

Object.keys(slsw.lib.entries).forEach(key => (
  entries[key] = ['./source-map-install.js', slsw.lib.entries[key]]
));

module.exports = {
  externals: [nodeExternals()],
  entry: entries,
  devtool: 'source-map',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.ts',
      '.tsx'
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    loaders: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
};
