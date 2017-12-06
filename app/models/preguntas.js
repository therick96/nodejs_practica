var mongoose = require('../connections/mongoose');
var esquema = mongoose.Schema;

var esquemaPreguntas = new esquema({
    user : {type  : esquema.Types.ObjectId, ref : 'user'},
    titulo : {type : String},
    contenido : {type : String},
    slug : {type : String}
});

var preguntas = mongoose.model('question', esquemaPreguntas);

module.exports = preguntas;