/*
    Event Routes
    /api/memberships
*/
const { Router } = require('express');

// const { validateJWT } = require('../middlewares/validate-jwt');
const { getMemberships } = require('../controllers/memberships');

const router = Router();

// Todas tienes que pasar por la validación del JWT
// router.use( validateJWT );


// Obtener promociones 
router.get('/', getMemberships );


module.exports = router;