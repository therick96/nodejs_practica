var homeController = function (server){
    console.log('homeController Listo');

    server.route('/')
        .get(function(req, res){
            //res.send('Hola Mundo');
            res.render('home/index');
        });
};

module.exports = homeController;