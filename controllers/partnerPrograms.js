const { response } = require('express');
const PartnerProgram = require('../models/Partnerprogram');

const getPartnerPrograms = async( req, res = response ) => {

    const {memberNumber} = req.query;
    try {
        let partnerPrograms = await PartnerProgram.findOne({ memberNumber });

        if ( !partnerPrograms ) {
            return res.status(400).json({
                ok: false,
                msg: 'No hay datos con este memberNumber'
            });
        }

        res.json({
            ok: true,
            programs: partnerPrograms.programs,
            memberNumber: partnerPrograms.memberNumber
        })

    } catch (error) {
         // si hubo algun error
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const createPartnerPrograms = async( req, res = response ) => {
    const partnerProgram = new PartnerProgram( req.body )

    try{
        const newProgram = await partnerProgram.save()

        res.json({
            ok: true,
            partnerProgram: newProgram
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}


module.exports = {
    getPartnerPrograms,
    createPartnerPrograms
}