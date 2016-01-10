'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan')
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());


var data = {};

app.get('/:key', function (req, res, next) {
  var key = req.params.key;
  res.json(data[key]);
});

app.post('/:key', function (req, res, next) {
  var key = req.params.key;
  data[key] = req.body;
  res.json({response: 'ok'});
});


var port = process.env.NODE_PORT || 3000
var server = app.listen(port, function () {
  var addr = server.address();
  console.log(`cpgo-server running at http://${addr.address}:${addr.port}`);
});



