/*
    Event Routes
    /api/promotions
*/
const { Router } = require('express');

// const { validateJWT } = require('../middlewares/validate-jwt');
const { getPromotions } = require('../controllers/promotions');

const router = Router();

// Todas tienes que pasar por la validación del JWT
// router.use( validateJWT );


// Obtener promociones 
router.get('/', getPromotions );


module.exports = router;