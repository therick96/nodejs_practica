var mongoose = require('../connections/mongoose'),
    esquema = mongoose.Scheme;

var esquemaRespuesta = new esquema({
    pregunta : {type : esquema.Types.ObjectId, ref : 'questions'},
    user : {type : esquema.Types.ObjectId, ref : 'user'},
    contenido : {type : String},
    fecha : {type : Date, default : Date.now}
});
