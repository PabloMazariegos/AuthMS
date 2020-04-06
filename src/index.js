const express = require('express');
const router = require('./routes/router-setup');
const passportSetup = require('./config/passport-setup');
const mongo = require('./db/mongo-setup');
const passport = require('passport');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8500;

//CONFIGURACION DE MIDDLEWARES
app.use(passport.initialize())

//CONFIGURANDO DB
mongo.setup()
    .catch((err)=>{
        console.log("ERROR conexion a MongoDB: " + err)
    })



// CONFIGURANDO RUTAS
router.setup(app)

//CONFIGURANDO PUERTO
app.listen(port, ()=>{
    console.log('auth-ms escuchando en puerto: ' + port)
})

