const jwt = require('jsonwebtoken');
// para manejar la sesion del usuario vamos a ocupar JWT
// JWT regresa un token si es valido se dejara al usuario navegar por el sitio
// se instala la libreria npm i jsonwebtoken

const generateJWT = ( uid, name, lastName, memberNumber ) => {

    // promesa que resuelve o falla 
    return new Promise( (resolve, reject) => {

        const payload = { uid, name, lastName, memberNumber };

        // firma para el jwt
        // payload y la frase secreta; expiracion de una hora
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '1h'
        }, (err, token ) => {

            // si hubo algun error
            if ( err ){
                console.log(err);
                reject('No se pudo generar el token');
            }

            // si todo estuvo correcto
            resolve( token );

        })


    })
}


// exportacino del modulo
module.exports = {
    generateJWT
}


