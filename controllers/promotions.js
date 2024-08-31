const { response } = require('express');
const Promotion = require('../models/Promotion');

const getPromotions = async( req, res = response ) => {

    const promotions = await Promotion.find()

    res.json({
        ok: true,
        promotions
    });
}

module.exports = {
    getPromotions
}