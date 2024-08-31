const { Schema, model } = require('mongoose');

// lo que el usuario debe tener
const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberNumber: {
        type: String,
        required: true
    }
});

// exportacion del modelo 
module.exports = model('User', UserSchema );

