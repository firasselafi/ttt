const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assisstanceSchema = new Schema({
    firstname: {type: String, trim: true, required: true},
    lastname: {type: String, trim: true, required: true},
    username: {
        type: String
    },
    password: {
        type: String,
    }

});

const Assisstance = mongoose.model('ass', assisstanceSchema);
module.exports = Assisstance;