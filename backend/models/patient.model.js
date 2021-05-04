const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    firstname: {type: String, trim: true, required: true},
    lastname: {type: String, trim: true, required: true},
    gender: {type: String},
    date: {type: Date, default: Date.now},
    bloodType: {type: String},
    phoneNumber: {type: String},
    allergies: {type: String},
    insuranceNumber: {type: String},
    id: {type: String},
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;