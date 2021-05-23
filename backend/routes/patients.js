const router = require('express').Router();
const { default: ColumnGroup } = require('antd/lib/table/ColumnGroup');
const Doctor = require('../models/doctor.model');
let Patient = require('../models/patient.model');

// get

router.route('/get').get((req, res) => {
    Patient.find()
      .then(patients => res.json(patients), console.log('Patients Retrived!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// get by id
  router.route('/getbyid/:id').get((req, res) => {
    Patient.find({ id: req.params.id})
      .then(patients => res.json(patients), console.log('Patient to Update Retrived!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


// add route
router.route('/create').post(async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const gender = req.body.gender;
    const date = new Date(req.body.date);
    const bloodType = req.body.bloodType;
    const phoneNumber = req.body.phoneNumber;
    const allergies = req.body.allergies;
    const insuranceNumber = req.body.insuranceNumber;
    const id = req.body.id;
    const email = req.body.email;
    const doctor = req.body.doctor;

    // const {
    //     firstname,
    //     lastName,
    // } = req.body;

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
        email,
        doctor,
    });

    const docObj = await Doctor.findById(doctor);
    console.log(docObj);
    docObj.patients.push(newPatient);
    await docObj.save();

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
            console.log(req.body);
            if(req.body.firstname) patient.firstname = req.body.firstname;
            if(req.body.lastname)patient.lastname = req.body.lastname;
            if(req.body.gender) patient.gender = req.body.gender;
            if(req.body.date) patient.date = new Date(req.body.date);
            if(req.body.bloodType) patient.bloodType = req.body.bloodType;
            if(req.body.phoneNumber) patient.phoneNumber = req.body.phoneNumber;
            if(req.body.allergies)patient.allergies = req.body.allergies;
            if(req.body.insuranceNumber)patient.insuranceNumber = req.body.insuranceNumber;
            if(req.body.email)patient.email = req.body.email;
            if(req.body.id)patient.id = req.body.id;
            // Object.assign(patient, req.body);
            patient.save();
        })
            .then( () => res.json('Patient updated!'))
            .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;