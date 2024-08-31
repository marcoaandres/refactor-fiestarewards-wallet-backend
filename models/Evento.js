const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,        
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    // type: es una referencia de un id, referencia a un usuario 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});
// modificacion de la serializacion del objeto
// pbreescribimos el metoso (json) toJSON
EventoSchema.method('toJSON', function() {
    // esta modificacion solo es a la hora de verlo
    // desestructuramos a todo el objeto
    // extraemos la version(__v) y el id (_id)
    // remplazamos que queremos ver el id (_id) en la respuesta como id solamente
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Evento', EventoSchema );

