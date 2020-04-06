const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const users = require('../db/models/users');
require('dotenv').config();

passport.serializeUser((user, done)=>{
    done(null, user.googleId);
})


//configurando strategia con Google
passport.use(
    new googleStrategy({
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_SECRETID,
        callbackURL: '/auth/google/redirect'

    }, 
    //Callback que se ejecuta luego de autenticacion en Google
    (accessToken, refreshToken, profile, done)=>{    

        //Verificar sí el ID de google ya existe en mongo
        users.findOne({googleId: profile.id})
        .then((user)=>{
            if(!user){

                //Guardando info del user en Mongo
                // - nombre completo devuelto por google
                // - Id de google 
                new users({
                    userName: profile.displayName,
                    googleId: profile.id
                })
                .save()
                .then((userCreado)=>{
                    console.log(' --- USER CREADO! -- \n')
                    user = userCreado;
                })
            }
            return done(null, user);
        })
  
        


    })
)