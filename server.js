var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');

var app = express();
var PORT = 8080;

module.exports = app;
app.use( express.static( path.join(__dirname, './') ) );

app.get('/', function(req, res){
        res.sendFile( path.join(__dirname+'./index.html') );
        
});

var sodaserver = app.listen(PORT, function() {
  console.log('SodaServer started and listenning on port '+PORT);
});

