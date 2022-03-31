const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    cart: {
        type: mongoose.Types.ObjectId,
        ref: "carts",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    total_quantity: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    type_delivery: {
        type: String,
        required: true
    },
    type_payment: {
        type: String,
        required: true
    }
});

const Transactions = mongoose.model("transactions", transactionsSchema);

module.exports = Transactions;