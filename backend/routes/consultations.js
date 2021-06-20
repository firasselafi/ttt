const router = require('express').Router();
let Fiche = require('../models/fiche.model');
let Ordonnance = require('../models/ordonnace.model');
let Certification = require('../models/certification.model');
let Patient = require('../models/patient.model');
const { sendSMS } = require('../utils');
// add route

router.route('/create').post(async (req, res) => {

    // const firstname = req.body.firstname;
    const medicalHistory = req.body.medicalHistory;
    const signes = req.body.signes;
    const weight = req.body.weight;
    const bloodPressure = req.body.bloodPressure;
    const temperature = req.body.temperature;
    const patientId = req.body.patientId;
    const drugs = req.body.drugs;

    const patient = await Patient.findOne({ id: patientId});

    if (patient && patient.phoneNumber) {
        const message = drugs.map((drug, i) => `drug ${i + 1} - ${drug.drugName}, ${drug.drugDose} dose per day, for ${drug.drugDuration}`).join('\n');
        await sendSMS(message, patient.phoneNumber);
    }

    const newFiche = new Fiche({
        patientId,
        medicalHistory,
        signes,
        weight,
        bloodPressure,
        temperature,

    });




    const newOrdonnance = new Ordonnance({
        patientId,
        drugs,
    
    })

    const certificateDescription = req.body.certificateDescription;
    const certificateNbrDays = req.body.certificateNbrDays;

    const newCertification = new Certification ({
        certificateDescription,
        certificateNbrDays,
        patientId,
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