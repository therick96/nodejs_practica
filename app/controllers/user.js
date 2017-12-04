var user_controler = function(server){
    server.route("/logout") //Define una ruta
        .get(function(req, res){
            req.logout();
            res.redirect("/");
        })
};

module.exports = user_controler;