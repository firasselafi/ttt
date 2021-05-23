const router = require('express').Router();
const bcrypt = require('bcrypt');
const Doctor = require('../models/doctor.model');
const jwt = require('jsonwebtoken');

router.post("/login", async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const doc = await Doctor.findOne({ username });

    if (!doc) {
        res.status(401).json({});
        return;
    }

    if (!(await bcrypt.compare(password, doc.password))) {
        // password incorrect
        res.status(401).json({});
        return;
    }

    delete doc.password;

    const secret = process.env.JWT_SECRET || "secret";
    const token = jwt.sign(doc.toObject(), secret);

    res.json({
        token
    })
});

router.post("/register", async (req, res) => {
    let {
        username,
        password,
        firstname,
        lastname,
        speciality
    } = req.body;

    password = await bcrypt.hash(password, 10);

    const doc = await Doctor.create({
        username,
        password,
        lastname,
        speciality,
        firstname,
    });

    res.json(doc);

});


module.exports = router;