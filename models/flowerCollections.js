const mongoose = require("mongoose");
const {Schema} = mongoose;

const flowerCollections = new mongoose.Schema({
    no: {
        type: Number,
        required: true, autoIncrement
},
flower_name: {
    type: String,
    required: true, 
},
country: [String],
description: {
    type: String,
    required: true, 
},
Image:  {
    type: String,
    required: true, 
},
latin_name:  {
    type: String,
    required: true, 
}
});

const Flower = mongoose.model("flowers", flowerCollections);
module.exports = Flower;
