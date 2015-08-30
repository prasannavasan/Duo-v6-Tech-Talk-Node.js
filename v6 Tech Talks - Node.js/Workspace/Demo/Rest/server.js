/*
var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('Hello Duo\n');
});
app.listen(3000);
console.log('Listening on port 3000...');
*/


/*
var express = require('express');

var app = express();

require('./routes')(app);

app.listen(3000);
console.log("Server\' on port 3000...");
*/


var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/Duo';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
});

require('./models/musician');
require('./routes')(app);

app.listen(3000);
console.log('Listening on port 3000...');


