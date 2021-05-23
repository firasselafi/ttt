const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    firstname: {type: String, trim: true, required: true},
    lastname: {type: String, trim: true, required: true},
    speciality: {type: String},
    patients:[{ 
        type: Schema.ObjectId, 
        ref: 'Patient' }],
    username: {
        type: String
    },
    password: {
        type: String,
    }

});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;