var preguntas = require("../models/preguntas");
var respuestas = require("../models/respuestas");
var usuario = require("../models/users"),
    logged = require("../middlewares/logged"),
    getUser = require("../middlewares/getuser"),
    slugs = require("slugs");

var discussController = function (server, io) {
    io.on('connection', function(socket){ // Escucha el evento io() disparado en el index
        console.log("Un usuario se conectó");
    });
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
                respuestas.find({
                    pregunta : pregunta
                }).populate("user").sort("fecha").exec(function(error, respuesta){
                    res.render('discusion/detalle_pregunta', {pregunta : pregunta, respuestas : respuesta});
                })
            })
        }).post(logged, getUser, function(req, res){
            preguntas.findOne({
                slug : req.params.slug 
            }).populate('user').exec(function(error, pregunta){
                console.log(pregunta);
                var respondido = new respuestas({
                    pregunta : pregunta,
                    user : req.user,
                    contenido : req.body.respuesta
                });
                respondido.save(function(error){
                    if(error){
                        console.log(error);
                        return;
                    }
                });
                res.redirect("/preguntas/" + req.params.slug);
                
            })
        });
};

module.exports = discussController;