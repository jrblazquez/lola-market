var express = require('express');
var app = express();
var token = require('./token.json');
var postalcode = require('./postalcode.json');
var categories = require('./categories.json');
var items1 = require('./items_set_1.json');

app.get('/user/session', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(token));
});

app.get('/user/postalcode', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(postalcode));
});

app.get('/company/categories', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(categories));
});

app.get('/company/items', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(items1));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
