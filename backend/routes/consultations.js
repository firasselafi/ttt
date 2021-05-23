const router = require('express').Router();
let Fiche = require('../models/fiche.model');
let Ordonnance = require('../models/ordonnace.model');
let Certification = require('../models/certification.model')
// add route

router.route('/create').post((req, res) => {

    // const firstname = req.body.firstname;
    const medicalHistory = req.body.medicalHistory;
    const signes = req.body.signes;
    const weight = req.body.weight;
    const bloodPressure = req.body.bloodPressure;
    const temperature = req.body.temperature;
    const patientId = req.body.patientId;

    const newFiche = new Fiche({
        patientId,
        medicalHistory,
        signes,
        weight,
        bloodPressure,
        temperature,

    });



    const drugs = req.body.drugs;

    const newOrdonnance = new Ordonnance({
        patientId,
        drugs,
        // drugs:[ {
        //     name: drugs.name,
        //     dose: drugs.dose,
            
        // }]


    })

    const certificateDescription = req.body.certificateDescription;
    const certificateNbrDays = req.body.certificateNbrDays;

    const newCertification = new Certification ({
        certificateDescription,
        certificateNbrDays,
    })

    // newFiche.save()
    // .then(() => res.json('Consultation added!'))
    // .catch( err => res.status(400).json('Error: ' + err));

    newFiche.save()
        .then( () => {

        newOrdonnance.save()
            .then( () => {        newCertification.save().then(res.json('Consultation & Ordonnace & Certificate added!')).catch( err => res.status(400).json('Error: ' + err))})
            .catch( err => res.status(400).json('Error: ' + err))
            })
        
        .catch( err => res.status(400).json('Error: ' + err));
        






    // newOrdonnance.save()
    //     .then( () => res.json('Ordonnace added!'))
    //     .catch( err => res.status(400).json('Error: ' + err));
});
module.exports = router;