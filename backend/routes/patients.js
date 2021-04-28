const router = require('express').Router();
let Patient = require('../models/patient.model');


// add route
router.route('/create').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const gender = req.body.gender;
    const date = new Date(req.body.date);

    const newPatient = new Patient({
        firstname,
        lastname,
        gender,
        date,
    });

    newPatient.save()
        .then( () => res.json('Patient added!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

// delete route
router.route('/:id').delete((req, res) => {
    Patient.findByIdAndDelete(req.params.id)
        .then( () => res.json('Patient deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update route
router.route('/update/:id').patch((req, res) => {
    Patient.findByIdAndUpdate(req.params.id)
        .then(patient => {
            patient.firstname = req.body.firstname;
            patient.lastname = req.body.lastname;

            patient.save();
        })
            .then( () => res.json('Patient updated!'))
            .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;