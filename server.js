var express = require('express'),
    swig = require('swig');
var server = express();

server.engine('html', swig.renderFile); //El servidor de express, el motor Renderizara archivos de swig html
server.set('view engine', 'html'); //El servidor tendra un motor de vista html
server.set('views', __dirname + '/app/views'); //Lugar donde se alojaran los archivos html, __dirname: devuelve direccion de la ruta del proyecto

require('./app/controllers/home')(server);

server.listen(8000)