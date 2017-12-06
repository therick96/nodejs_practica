var preguntas = require("../models/preguntas");
var usuario = require("../models/users");

var discussController = function (server) {
    server.route('/guardar_pregunta')
        .post(function(req, res){
            usuario.findOne({
                id_network : req.user.id,

            }, function(error, usuario){
                if (usuario){
                    var pregunta = new preguntas({
                        user : usuario,
                        titulo : req.body.titulo,
                        contenido : req.body.contenido
                    });
                    pregunta.save(function(error){
                        if (error){
                            console.log(error);
                            return
                        }
                    });
                    res.redirect("/");
                }
            });
        });
};

module.exports = discussController;