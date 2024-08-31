const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');
const { createMemberNumber } = require('../helpers/createMemberNumber');
 
const createUser = async(req, res = response ) => {

    const { email, password } = req.body;

    // validacion para que no exista usuarios duplicados
    try {
        let user = await User.findOne({ email });

        // response, usuario existente
        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        user = new User( req.body );
    
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );

        // Crear memberNumber
        const memberNumber = createMemberNumber(user);
        user.memberNumber = memberNumber;

        // guardar el usuario en bbdd
        await user.save();

        // Generar JWT
        const token = await generateJWT( user.id, user.name, user.lastName, user.memberNumber );
    
        // response exitoso, usuario creado
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            lastName: user.lastName,
            memberNumber: user.memberNumber,
            token
        })
        
    } catch (error) {
        // si hubo algun error
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

// metodo login
const loginUser = async(req, res = response ) => {

    const { email, password } = req.body;

    try {
        // buscamos el usuario
        const user = await User.findOne({ email });

        // si no existe el usuario
        if ( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, user.password );

        // si el password es incorrecto
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar JWT
        const token = await generateJWT( user.id, user.name, user.lastName, user.memberNumber );

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            lastName: user.lastName,
            memberNumber: user.memberNumber,
            token
        })


    } catch (error) {
        // si hubo algun error
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

// revalidacion del token JWT
const revalidateToken = async (req, res = response ) => {

    const { uid, name, lastName, memberNumber } = req;

    // Generar JWT
    const token = await generateJWT( uid, name, lastName, memberNumber );


    res.json({
        ok: true,
        uid,
        name,
        lastName,
        memberNumber,
        token
    })
}




module.exports = {
    createUser,
    loginUser,
    revalidateToken
}