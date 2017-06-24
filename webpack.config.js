var webpack = require('webpack'),
var path = require('path');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/build',
    filename: 'recipe.bundle.js'
  }


}