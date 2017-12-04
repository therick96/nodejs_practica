var homeController = function (server){
    console.log('homeController Listo');

    server.route('/')
        .get(function(req, res){
            //res.send('Hola Mundo');
            if (req.user){//Si se logueo
                if (req.user.provider == "facebook"){
                    var nombre = req.user._json.name; //Trae el nombre
                    //var url_foto = 'http://graph.facebook.com/' + req.user.id + '/picture'; //Trae la url de la foto
                    var correo = req.user.email
                    //console.log(nombre + ' ' + url_foto);
                    res.render('home/index', {correo : correo, usuario : nombre});
                }
            }else{
                res.render('home/index');
            }
        });
};

module.exports = homeController;