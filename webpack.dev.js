var path = require(`path`);
var webpack = require(`webpack`);

module.exports = {
  devtool: `eval-source-map`,
  entry: [
    `webpack-dev-server/client?http://0.0.0.0:3001`, // WebpackDevServer host and port
    `webpack/hot/only-dev-server`, // "only" prevents reload on syntax errors
    `./src/Client`
  ],
  output: {
    path: path.join(__dirname, `public/js`),
    filename: `bundle.js`,
    publicPath: `/js/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [`react-hot`, `babel`],
      include: path.join(__dirname, `src`)
    }]
  }
};
