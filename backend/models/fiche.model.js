const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ficheSchema = new Schema({
    patientId: {type: String},

    medicalHistory: {type: String},
    signes: {type: String},
    weight: {type: Number},
    bloodPressure: {type: Number},
    temperature: {type: Number},
    

}, {
    timestamps: true
});

const Fiche = mongoose.model('Fiche', ficheSchema);
module.exports = Fiche;