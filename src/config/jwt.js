const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.GenerarToken = (userId)=>{
    const token = jwt.sign({}, process.env.JWTKEY, {
        expiresIn: '1 hour',
        subject: userId.toString()
    })

    return token;
}