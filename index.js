// var path;
'use strict';
const express = require('express');
const serveStatic = require('serve-static')

const app = express();
app.use(serveStatic('./', {'index': ['index.html', 'index.htm']}))
app.use(serveStatic('./data'))
app.use(serveStatic('./lib'))
// app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  // res.status(200).send("Hello, world!");
  res.render('index', function(err, html) {
	  res.send(html);
	});
    // res.sendfile('./bower_components/shower-bright/index.html');
});
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
    console.log('App listening at http://%s:%s', server.address().address, server.address().port);
    console.log("Press Ctrl+C to quit.");
    console.log("checking if adjustments work");
  });