var express = require('express'),
    http = require('http'),
    swig = require('swig'),
    passport = require('passport'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'), // Parseador de cookies
    body_parser = require('body-parser'); //Parseador de body (Para POST)
var server = express();
var server_sockets = http.createServer(server).listen(8000);
var io = require('socket.io').listen(server_sockets);

swig.setDefaults({
    cache : false
});

//Express
server.use(body_parser.urlencoded({
    extended : true
})); //Conf del body parser...
server.use(body_parser.json()); //...Para que no salga deprecated
server.use(cookieParser());
server.use(session({secret : 'mi clave'})); //Para configurar una sesion es necesario configurar primero las cookies

//Passport
server.use( passport.initialize());
server.use( passport.session());

passport.serializeUser(function (user, done){ // Para serealizar usuario
    done(null, user); //se guarda en req.user
}); 

passport.deserializeUser(function (user, done){ // Para deserealizar usuario
    done(null, user);
}); 

//Swig
server.engine('html', swig.renderFile); //El servidor de express, el motor Renderizara archivos de swig html
server.set('view engine', 'html'); //El servidor tendra un motor de vista html
server.set('views', __dirname + '/app/views'); //Lugar donde se alojaran los archivos html, __dirname: devuelve direccion de la ruta del proyecto

server.use(express.static('./public'));

//Controllers:
require('./app/controllers/home')(server);
require('./app/controllers/user')(server);
require('./app/controllers/discuss')(server);
//Conecctions
require('./app/connections/facebook')(server);

//server.listen(8000)