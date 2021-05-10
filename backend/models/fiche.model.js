const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ficheSchema = new Schema({
    patientId: {type: String},

    medicalHistory: {type: String},
    signes: {type: String},
    weight: {type: String},
    bloodPressure: {type: String},
    temperature: {type: String},
    

}, {
    timestamps: true
});

const Fiche = mongoose.model('Fiche', ficheSchema);
module.exports = Fiche;