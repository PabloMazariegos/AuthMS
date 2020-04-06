const router = require('express').Router();
const utils = require('../../utils/utils');
const passport = require('passport');
const jwt = require('../../config/jwt')

//redireccion a Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
}))

//Retorno despues de autenticarse en google
router.get('/google/redirect', 
    passport.authenticate('google'),  //obtener datos de google  
    (req, res)=>{

    res.set({
        'Authorization': jwt.GenerarToken(req.user.googleId)
    })
    res.redirect('') //redirigir hacia el aplicativo con el nuevo token generado.
    
    
})

module.exports = router;


