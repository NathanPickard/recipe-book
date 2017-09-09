var webpack = require('webpack'),
  path = require('path');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './app.js',
    vendor: [
      'angular',
      'angular-material',
      'angular-material/angular-material.css'
    ]
  },
  output: {
    path: __dirname + '/public/build',
    filename: 'recipe.bundle.js'
  },
  // devServer: {
  //   // contentBase: path.join(__dirname, '/public/build'),
  //   // // compress: true,
  //   // // stats: "errors-only",
  //   open: true,
  //   port: 3000
  // },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
};