const utils = require('../utils/utils');
const authRoutes = require('./auth/auth-routes')


module.exports.setup = (app) =>{

    //Rutas de autenticación
    app.use('/auth', authRoutes);

    //Ruta Home
    app.get('/', (req, res)=>{
        res.json(utils.jsonRespuesta(res.statusCode, req.originalUrl, "Home"))
    })

    // Manejando error 404
    app.use('*', (req, res)=>{
        res.status(404);
        res.json(utils.jsonRespuesta(res.statusCode, req.originalUrl, "(error) Invalid endpoint or method"))
    })
}

