
var loggedMidleware = function (req, res, next) {
    if (req.user){
        next(); //en caso de que este loggeado, continua con la siguiente funcion
    }else{
        res.redirect('/auth/facebook'); //si no, redirige
    }
};

module.exports = loggedMidleware;