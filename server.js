'use strict'

var express = require('express');
	

var app = express();
var port = 8000;
//app.use('/app', express.static(__dirname + '/app'));
//app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/'));
app.listen(port);
console.log('Running on : '+port);

