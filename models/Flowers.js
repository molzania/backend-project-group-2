const mongoose = require('mongoose');

const flowersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    latinName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Flowers = mongoose.model("flowers", flowersSchema);

module.exports = Flowers;