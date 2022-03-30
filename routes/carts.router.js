const express = require("express");
const cart = express.Router();

const { getAll, getById, addCart, updateCart, deleteCart} = require("../controllers/carts.controller");

cart.get("/", getAll);
cart.get("/:id", getById);
cart.post("/", addCart);
cart.put("/:id", updateCart);
cart.delete("/:id", deleteCart);

module.exports = cart;