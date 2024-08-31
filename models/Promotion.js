const { Schema, model } = require('mongoose');

const PromotionSchema = Schema({

    title: {
        type: String,
        required: true
    },
    texto: {
        type: String,   
        required: true     
    },
    terminos: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    }

});

PromotionSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Promotion', PromotionSchema );

