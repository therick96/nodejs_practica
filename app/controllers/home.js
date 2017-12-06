var preguntas = require('../models/preguntas');

var homeController = function (server){
    console.log('homeController Listo');

    server.route('/')
        .get(function(req, res){
            preguntas.find({})
                .sort('-fecha').populate("user") //Sort para ordenar por fecha, populate para traer todos los datos de user
                .exec(function(error, pregunta){
                    //res.send('Hola Mundo');
                    console.log(pregunta);
                    if (req.user){//Si se logueo
                        if (req.user.provider == "facebook"){
                            var nombre = req.user._json.name; //Trae el nombre
                            //var url_foto = 'http://graph.facebook.com/' + req.user.id + '/picture'; //Trae la url de la foto
                            //console.log(nombre + ' ' + url_foto);
                            res.render('home/index', {usuario : nombre, 'preguntas' : pregunta});
                        }
                    }else{
                        res.render('home/index', {'preguntas' : pregunta});
                    }
                });
        });
};

module.exports = homeController;