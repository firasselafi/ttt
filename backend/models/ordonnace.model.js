const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ordonnanceSchema = new Schema({
    patientId: {type: String},
    drugs: [mongoose.Schema.Types.Mixed]
}, {
    timestamps: true
});

const Ordonnance = mongoose.model('Ordonnance', ordonnanceSchema);
module.exports = Ordonnance;