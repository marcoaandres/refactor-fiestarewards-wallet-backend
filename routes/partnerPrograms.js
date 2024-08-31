/*
    Event Routes
    /api/partnerPrograms
*/
const { Router } = require('express');

const { validateJWT } = require('../middlewares/validate-jwt');
const { getPartnerPrograms, createPartnerPrograms } = require('../controllers/partnerPrograms');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use( validateJWT );


// Obtener promociones 
router.get('/', getPartnerPrograms );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('memberNumber','El memberNumber es obligatorio').not().isEmpty(),
        check('programs','Los programs son obligatorios').not().isEmpty(),
        validateFields
    ],
    createPartnerPrograms 
);


module.exports = router;