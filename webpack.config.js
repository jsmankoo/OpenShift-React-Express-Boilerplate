var path = require(`path`);
var webpack = require(`webpack`);

module.exports = {
  entry: {
    Client: `./src/Client`,
  },
  output: {
    path: path.join(__dirname, `public/js`),
    filename: `bundle.js`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`production`)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [`babel`],
      include: path.join(__dirname, `src`)
    }]
  }
};
