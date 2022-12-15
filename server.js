var express = require('express');
var bodyParser = require('body-parser');
const chatModel = require('./model/chat_model');


var app = express();
var bodyParser = require('body-parser');

var server = app.listen(3002, () => {
  console.log('server is running on port', server.address().port);
});

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))