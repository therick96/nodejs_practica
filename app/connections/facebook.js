var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy; //Estrategia de auentificacion

var facebookConection = function (server){
    console.log('Conexion con facebook');
    passport.use(
        new FacebookStrategy(
            {
                clientID : '1659775674085399',
                clientSecret : '31f006715e3dc78d0c06be22ea8dec8f',
                callbackURL : 'http://localhost:8000/auth/facebook/callback' //Url donde regresara despues de autentificar
            }, 
            function(accessToken, RefreshToken, profile, done){
                done(null, profile); //Profile son todos los datos de la persona que se logea con facebook
            }
        )
    );
    server.get('/auth/facebook', passport.authenticate('facebook')); //Para autentificarme con fb es necesario ir a esa url
    server.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect : '/formulario_1',
        failureRedirect : '/errores'})
    );

};

module.exports = facebookConection;