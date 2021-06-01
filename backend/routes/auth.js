const router = require('express').Router();
const bcrypt = require('bcrypt');
const Doctor = require('../models/doctor.model');
const jwt = require('jsonwebtoken');
const Assisstance = require('../models/assisstance.model');

router.post("/login", async (req, res) => {
    const {
        username,
        password,
        type
    } = req.body;

    if (!type) {
        res.status(400).json({});
        return;
    }

    const user = ( type === "doctors") ? await Doctor.findOne({ username }) : await Assisstance.findOne({username});

    if (!user) {
        res.status(401).json({});
        return;
    }

    if (!(await bcrypt.compare(password, user.password))) {
        // password incorrect
        res.status(401).json({});
        return;
    }

    delete user.password;

    const secret = process.env.JWT_SECRET || "secret";
    const token = jwt.sign(user.toObject(), secret);

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
        speciality,
        type
    } = req.body;

    if (!type) {
        res.status(400).json({});
        return;
    }

    let result;
    password = await bcrypt.hash(password, 10);
    if (type === "doctors") {
        result = await Doctor.create({
            username,
            password,
            lastname,
            speciality,
            firstname,
        });
    } else {
        result = await Assisstance.create({
            username,
            password,
            firstname,
            lastname
        });
    }
    
    res.json(result);

});


module.exports = router;