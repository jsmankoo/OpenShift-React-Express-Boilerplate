const express = require(`express`);
const morgan = require(`morgan`);
const webpack = require(`webpack`);
const WebpackDevServer = require(`webpack-dev-server`);
const config = require(`./webpack.dev`);

// Webpack Dev Server for Hot module reloading
// Comment it out during production
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


// Init express
let app = express();

app.set(`port`, process.env.NODE_PORT || 3000);
app.set(`ip`, process.env.NODE_IP || `localhost`);

app.set(`views`, `./views`);
app.set(`view engine`, `pug`);

app.use(morgan(`combined`));
app.use(express.static(`./public`));

app.get(`/`, (req, res)=>{
  res.render(`index`);
});

app.listen(app.get(`port`), app.get(`ip`), ()=>{
  console.log(`Application ip ${app.get(`ip`)}:${app.get(`port`)}`);
  console.log(`worker ${process.pid} started...`);
});

// const http         = require('http'),
//       fs           = require('fs'),
//       path         = require('path'),
//       contentTypes = require('./utils/content-types'),
//       sysInfo      = require('./utils/sys-info'),
//       env          = process.env;
//
// let server = http.createServer(function (req, res) {
//   let url = req.url;
//   if (url == '/') {
//     url += 'index.html';
//   }
//
//   // IMPORTANT: Your application HAS to respond to GET /health with status 200
//   //            for OpenShift health monitoring
//
//   if (url == '/health') {
//     res.writeHead(200);
//     res.end();
//   } else if (url.indexOf('/info/') == 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Cache-Control', 'no-cache, no-store');
//     res.end(JSON.stringify(sysInfo[url.slice(6)]()));
//   } else {
//     fs.readFile('./static' + url, function (err, data) {
//       if (err) {
//         res.writeHead(404);
//         res.end();
//       } else {
//         let ext = path.extname(url).slice(1);
//         res.setHeader('Content-Type', contentTypes[ext]);
//         if (ext === 'html') {
//           res.setHeader('Cache-Control', 'no-cache, no-store');
//         }
//         res.end(data);
//       }
//     });
//   }
// });
//
// server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
//   console.log(`Application worker ${process.pid} started...`);
// });
