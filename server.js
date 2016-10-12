var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000)
console.log('Listening on port 3000')