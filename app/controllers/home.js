var homeController = function (server){
    console.log('homeController Listo');

    server.route('/')
        .get(function(req, res){
            res.send('Hola Mundo');
        });
};

module.exports = homeController;