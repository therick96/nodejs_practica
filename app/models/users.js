var mongoose = require('../connections/mongoose');
var esquema = mongoose.Schema;

var esquemaUsuario = new esquema({
    id_network : {type : String},
    username : {type : String, require : true, index : {unique : true}},
    email : {type : String, require : true},
    tlf : {type : String},
    nombre : {type : String},
    apellido : {type : String}
});

var user = mongoose.model('user', esquemaUsuario); //Primero: nombre coleccion, segundo: esquema

module.exports = user