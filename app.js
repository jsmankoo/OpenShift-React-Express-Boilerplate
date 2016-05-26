var express = require(`express`);
var morgan = require(`morgan`);


// // Comment out during production
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.dev');
// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(3001, 'localhost', function (err, result) {
//   if (err) {
//     return console.log(err);
//   }
//
//   console.log('Listening at http://localhost:3001/');
// });


// Init express
var app = express();

app.set(`port`, process.env.NODE_PORT || 3000);
app.set(`ip`, process.env.NODE_IP || `localhost`);

app.set(`views`, `./views`);
app.set(`view engine`, `pug`);

app.use(morgan(`dev`));
app.use(express.static(`./public`));

app.get(`/`, function(req, res){
  res.render(`index`);
});

app.listen(app.get(`port`), app.get(`ip`), function(){
  console.log('Application ip ' + app.get(`ip`) + ':' + app.get(`port`));
  console.log('worker ' + process.pid + 'started...');
});
