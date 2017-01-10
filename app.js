var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.send('hello');
});

app.listen('3000', function () {
  console.log('Express server listening on port 3000');
});

module.exports = app;
