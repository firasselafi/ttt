const Doctor = require('../models/doctor.model');

const router = require('express').Router();


router.get("/:id/patients", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const doc = await Doctor.findById(id).populate("patients");

    res.json({patients: doc.patients});
});

router.get("/", async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
});

router.post("/", async (req, res) => {
    const body = req.body;
    await Doctor.create(body);

    res.json(body);
});

module.exports = router;