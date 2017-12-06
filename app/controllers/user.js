var users = require('../models/users'); //Guardo la configuracion de la base de mongoose

var user_controler = function(server){
    server.route("/logout") //Define una ruta
        .get(function(req, res){
            req.logout();
            res.redirect("/");
        })
    server.route("/formulario_1")
        .get(function(req, res){
            users.findOne({
                id_network : req.user.id
            }, function(error, usr){
                if (usr){
                    res.redirect('/');
                }else if (error){
                    res.render('user/formulario_1', {usuario : req.user._json.name});
                }
            }); // Averiguar si el usuario ya esta registrado
        })
        .post(function(req, res){
            console.log(req.user);
            var usuario = new users({
                id_network : req.user.id,
                username : req.body.usuario,
                email : req.body.correo,
                tlf : req.body.numero,
                nombre : req.body.nombre,
                apellido : req.body.apellido
            }); // Se crea una instancia de datos
            usuario.save(function(error){
                if (error){
                    console.log(error);
                    return;
                }
            });
            res.redirect('/');
        });

    server.route("/contact_me")
        .get(function(req,res){
            if (req.user){
                res.render("./contact_me", {usuario : req.user._json.name});
            }else{
                res.redirect("/auth/facebook");
            }
        });
};

module.exports = user_controler;