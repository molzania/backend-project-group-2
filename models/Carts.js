const mongoose = require("mongoose");

const cartsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Types.ObjectId,
        ref: "products",
        required: true
    },
    sub_quantity: {
        type: Number,
        required: true
    },
    sub_price: {
        type: Number,
        required: true
    }
});

const Carts = mongoose.model("carts", cartsSchema);

module.exports = Carts;