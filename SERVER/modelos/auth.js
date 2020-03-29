const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');
const Token = {};

Token.crearToken = (user) => {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(5, 'days').unix()
    }
    return jwt.encode(payload, config.SECRET_TOKEN);
}

Token.decodeToken = (token) =>{  
        const payload = jwt.decode(token, config.SECRET_TOKEN);
         /*   if(payload.exp < moment().unix()){
                reject({
                    status: 401,
                    message: 'Token ha expirado'
                })
            }
            resolve(payload.sub)
        
            reject({
                status: 500,
                message: 'Token invalido'
            })*/

    return payload
}


module.exports = Token;

