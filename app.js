var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {

  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.headers.host,
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
  });

});

app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});

module.exports = app;
