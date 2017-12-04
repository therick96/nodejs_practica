var homeController = function (server){
    console.log('homeController Listo');

    server.route('/')
        .get(function(req, res){
            //res.send('Hola Mundo');
            if (req.user){//Si se logueo
                var nombre = req.user._json.name; //Trae el nombre
                var url_foto = 'http://graph.facebook.com/' + req.user.id + '/picture'; //Trae la url de la foto
                console.log(nombre + ' ' + url_foto);
                res.render('home/index', {foto : url_foto, usuario : nombre});
            }else{
                res.render('base');
            }
        });
};

module.exports = homeController;