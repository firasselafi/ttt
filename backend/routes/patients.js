const router = require('express').Router();
let Patient = require('../models/patient.model');


// add route
router.route('/create').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const gender = req.body.gender;
    const date = new Date(req.body.date);
    const bloodType = req.body.bloodType;
    const phoneNumber = req.body.phoneNumber;
    const allergies = req.body.allergies;
    const insuranceNumber = req.body.insuranceNumber;
    const id = req.body.id;

    const newPatient = new Patient({
        firstname,
        lastname,
        gender,
        date,
        bloodType,
        phoneNumber,
        allergies,
        insuranceNumber,
        id,
    });

    newPatient.save()
        .then( () => res.json('Patient added!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

// delete route
router.route('/delete/:id').delete((req, res) => {
    Patient.deleteOne({ id: req.params.id})
        .then( () => res.json('Patient deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// update route
router.route('/edit/:id').patch((req, res) => {
    Patient.findOne({ id: req.params.id})
        .then(patient => {
            if(req.body.firstname) patient.firstname = req.body.firstname;
            if(req.body.lastname)patient.lastname = req.body.lastname;
            if(req.body.gender) patient.gender = req.body.gender;
            if(req.body.date) patient.date = new Date(req.body.date);
            if(req.body.bloodType) patient.bloodType = req.body.bloodType;
            if(req.body.phoneNumber) patient.phoneNumber = req.body.phoneNumber;
            if(req.body.allergies)patient.allergies = req.body.allergies;
            if(req.body.insuranceNumber)patient.insuranceNumber = req.body.insuranceNumber;
            patient.save();
        })
            .then( () => res.json('Patient updated!'))
            .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;