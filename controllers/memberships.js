const { response } = require('express');
const Membership = require('../models/Membership');

const getMemberships = async( req, res = response ) => {

    const memberships = await Membership.find()

    res.json({
        ok: true,
        memberships
    });
}

module.exports = {
    getMemberships
}