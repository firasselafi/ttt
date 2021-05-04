const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ordonnanceSchema = new Schema({
    patientId: {type: String},

    duration: {type: String},

    drugs: [{
        name: {type: String},
        dose: {type: String},
    }],






}, {
    timestamps: true
});

const Ordonnance = mongoose.model('Ordonnance', ordonnanceSchema);
module.exports = Ordonnance;