var preguntas = require("../models/preguntas");
var usuario = require("../models/users"),
    logged = require("../middlewares/logged"),
    getUser = require("../middlewares/getuser");

var discussController = function (server) {
    server.route('/guardar_pregunta')
        .post(logged, getUser, function(req, res){
            if (usuario){
                var pregunta = new preguntas({
                    user : req.user,
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
};

module.exports = discussController;