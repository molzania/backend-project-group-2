const express = require("express");
const flower = express.Router();

const { getAll, getById, addFlower, updateFlower, deleteFlower } = require("../controllers/flowers.controller");

flower.get("/", getAll);
flower.get("/:id", getById);
flower.post("/", addFlower);
flower.put("/:id", updateFlower);
flower.delete("/:id", deleteFlower);

module.exports = flower;