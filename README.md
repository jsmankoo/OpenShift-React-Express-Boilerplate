# Sample React App

Minimal Sample React App made for OpenShift using an express server and react-hot-loader.

## Development

```sh
$ npm install
$ npm install babel-node -g
$ babel-node app.js
```

## Production

Do the following:

app.js
```javascript
// Webpack Dev Server for Hot module reloading
// Comment it out during production
const webpack = require(`webpack`);
const WebpackDevServer = require(`webpack-dev-server`);
const config = require(`./webpack.dev`);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {colors: true}
}).listen(3001, `localhost`, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log(`Listening at http://localhost:3001/`);
});
```

views/index.pug
```pug
//- Take out localhost:3001 part during production
script(src='http://localhost:3001/js/bundle.js')
```

compile webpack
```sh
$ npm run compile
```

to run locally
```sh
$ babel-node app.js
```
