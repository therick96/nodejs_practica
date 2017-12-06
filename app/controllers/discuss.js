var preguntas = require("../models/preguntas");
var usuario = require("../models/users"),
    logged = require("../middlewares/logged"),
    getUser = require("../middlewares/getuser"),
    slugs = require("slugs");

var discussController = function (server) {
    server.route('/guardar_pregunta')
        .post(logged, getUser, function(req, res){
            if (usuario){
                var pregunta = new preguntas({
                    user : req.user,
                    titulo : req.body.titulo,
                    contenido : req.body.contenido,
                    slug : slugs(req.body.titulo)
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

    server.route('/preguntas/:slug')
        .get(function(req, res){
            preguntas.findOne({
                slug : req.params.slug
            }).populate('user').exec(function(error, pregunta){
                res.render('discusion/detalle_pregunta', {pregunta : pregunta});
            })
        }).post(logged, getUser, function(error, respuesta){
            
        });
};

module.exports = discussController;