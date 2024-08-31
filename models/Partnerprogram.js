const { Schema, model } = require('mongoose');

const PartnerProgramSchema = Schema({

    memberNumber: {
        type: String,
        required: true
    },
    programs: {
        type: Array,   
        required: true     
    }

});

// PartnerProgramSchema.method('toJSON', function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// });



module.exports = model('Partnerprogram', PartnerProgramSchema );

