var express = require('express');
var bodyParser = require('body-parser');
const chatModel = require('./model/chat_model');


var app = express();
var bodyParser = require('body-parser');
const { sendStatus } = require('express/lib/response');

var server = app.listen(3002, () => {
  console.log('server is running on port', server.address().port);
});

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages)=> {
    res.send(messages);
  })
})

app.post('/messages', (req,res) => {
  var message = new Message(req.body);
  message.save((err)=>{
    if(err)
      sendStatus(500);
      res.sendStatus(200);
  })
})