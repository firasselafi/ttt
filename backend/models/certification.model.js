const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const certificationSchema = new Schema({
    patientId: {type: String},

    certificateDescription: {type: String},
    certificateNbrDays: {type: String},


}, {
    timestamps: true
});

const Certification = mongoose.model('Certification', certificationSchema);
module.exports = Certification;