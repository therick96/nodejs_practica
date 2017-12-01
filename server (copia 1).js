var http = require("http"); 
/*
filesystem: permite controlar cosas en el sistema local
http: Para crear servidores de aplicaciones web
events: Para crear administradores de eventos
querystring: Para parsear una cadena a un objeto javascript
path: Permite manipular ruta de los archivos de nuestro sistema local
*/

function miPeticion(req, res){
    res.writeHead("200", {'content-type' : 'text/plain'});
    res.end("Hola Mundo");
}

var server = http.createServer(miPeticion).listen("3000");

var arreglos = require("./exportar");
console.log(arreglos.variable1);
console.log(arreglos.variable2);