const { Schema, model } = require('mongoose');

const MembershipSchema = Schema({

    nameMembership: {
        type: String,
        required: true
    },
    titleBenefits: {
        type: String,   
        required: true     
    },
    benefits: {
        type: Array,
        required: true
    },
    desktopImage: {
        type: String,
        required: true
    },
    mobileImage: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

});

MembershipSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Membership', MembershipSchema );

