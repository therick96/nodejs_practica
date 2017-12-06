var usuario = require('../models/users');

var getuserMiddleware = function (req,res,next) {
    usuario.findOne({
        id_network : req.user.id
    }, function(error, user){
        req.user = user;
        next();
    });
};

module.exports = getuserMiddleware;