var http = require("http"); 
/*
filesystem: permite controlar cosas en el sistema local
http: Para crear servidores de aplicaciones web
events: Para crear administradores de eventos
querystring: Para parsear una cadena a un objeto javascript
path: Permite manipular ruta de los archivos de nuestro sistema local
*/
var server = http.createServer(function(req, res){
    res.writeHead("200", {'content-type' : 'text/plain'});
    res.end("Hola Mundo");
}).listen("3000");
