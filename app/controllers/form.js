var formulario = function(server){
    console.log("formulario 1 Listo");
    server.route("/formulario_1")
        .get(function(req, res){
            res.render('./formulario_1', {usuario : req.query.user});
        }
    );
};

module.exports = formulario;