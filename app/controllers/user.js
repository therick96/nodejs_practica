var user_controler = function(server){
    server.route("/logout") //Define una ruta
        .get(function(req, res){
            req.logout();
            res.redirect("/");
        })
    server.route("/formulario_1")
        .get(function(req, res){
            res.render('user/formulario_1', {usuario : req.user._json.name});
        });
};

module.exports = user_controler;