var express = require('express');
var server = express()

require('./app/controllers/home')(server);

server.listen(8000)