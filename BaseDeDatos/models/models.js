const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({

    name: {
        type: String,
        require: true,
        unique: true
    },
    concept: {
        type: String,
        require: true

    },
    weight: {
        type: String,
        require: true
    },
    height: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    place: {
        type: String,
        require: true
    }

});

const Zoo = mongoose.model('Zoo', storeSchema);

module.exports = { Zoo }
