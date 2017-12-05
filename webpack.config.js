const path = require('path');

module.exports = {
  entry: './src/assets/scripts/friday.js',
  output: {
    path: path.resolve('public/assets/scripts/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
