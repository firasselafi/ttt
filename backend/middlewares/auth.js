
const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor.model');

module.exports = async (req, res, next) => {
    let token = req.get('Authorization');
    const secret = process.env.JWT_SECRET || 'secret';

    token = token.split(" ")[1]; 
    if (!token) {
        res.status(401).json({
            message: 'token not provided'
        });
        return;
    }

    try {
        jwt.verify(token, secret);
    } catch (err) {
        res.status(401).json({
            message: 'invalid token'
        });
        return;
    }
   
    const decoded = await jwt.decode(token);
    const doc = await Doctor.findOne({id: decoded.id});
    if (!doc) {
        res.status(401).json({
            message: 'doc not found !'
        });
        return;
    }

    req.user = doc;
    next();
}